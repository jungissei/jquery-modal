import axios from 'axios';
import { writeFile } from 'fs/promises';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

async function lintHtml() {
  try {
    // HTMLを取得
    const response = await axios.get('http://localhost:3001/basic/index.html');
    const html = response.data;

    // 一時ファイルに保存
    const tempFile = 'temp.html';
    await writeFile(tempFile, html);

    // markuplintを実行
    const { stdout, stderr } = await execAsync(`npx markuplint ${tempFile}`);

    if (stderr) {
      console.error('Error:', stderr);
    } else if (stdout) {
      console.log('Results:', stdout);
    } else {
      console.log('No issues found!');
    }

    // 一時ファイルを削除
    await execAsync(`rm ${tempFile}`);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

lintHtml();
