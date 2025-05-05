import axios from 'axios';
import { writeFile, readFile, unlink, mkdir } from 'fs/promises';
import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';

const execAsync = promisify(exec);

async function lintHtml(url) {
  let tempFilePath;
  try {
    // URLからファイル名を生成
    const fileName = url.split('/').pop() || 'index.html';
    const reportDir = path.join('markuplint', 'report');
    const reportFile = path.join(reportDir, `${fileName}.report.txt`);

    // レポートディレクトリが存在することを確認
    try {
      await mkdir(reportDir, { recursive: true });
    } catch (mkdirError) {
      if (mkdirError.code !== 'EEXIST') {
        throw mkdirError;
      }
    }

    // HTMLを取得
    const response = await axios.get(url);
    const html = response.data;

    // 一時ファイルに保存
    const uniqueId = crypto.randomUUID();
    tempFilePath = path.join(process.cwd(), `markuplint/temp_${uniqueId}.html`);
    await writeFile(tempFilePath, html);

    // markuplintを実行
    let stdout = '';
    let stderr = '';
    try {
      const result = await execAsync(`npx markuplint ${tempFilePath}`);
      stdout = result.stdout;
      stderr = result.stderr;
    } catch (execError) {
      // execAsyncのエラーをキャッチして、stdoutとstderrを取得
      stdout = execError.stdout || '';
      stderr = execError.stderr || '';
    }

    // 結果をファイルに保存
    let reportContent = `URL: ${url}\n\n`;
    if (stderr) {
      reportContent += `Error:\n${stderr}\n`;
    } else if (stdout) {
      reportContent += `Results:\n${stdout}\n`;
    } else {
      reportContent += 'No issues found!\n';
    }

    await writeFile(reportFile, reportContent);
    console.log(`Report saved to: ${reportFile}`);

  } catch (error) {
    console.error(`Error processing ${url}:`, error.message);
  } finally {
    // 一時ファイルを削除
    if (tempFilePath) {
      try {
        await unlink(tempFilePath);
      } catch (rmError) {
        console.error(`Failed to remove temp file: ${tempFilePath}`, rmError.message);
      }
    }
  }
}

async function main() {
  try {
    // コマンドライン引数を取得
    const args = process.argv.slice(2);
    const env = args[0]?.replace('--', '') || 'dev'; // デフォルトはdev

    // 環境に応じたJSONファイルを読み込む
    const urls = JSON.parse(await readFile(`markuplint/urls/${env}.json`, 'utf-8'));

    // 各URLに対してlintを実行
    for (const url of urls) {
      console.log(`Processing: ${url}`);
      await lintHtml(url);
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();
