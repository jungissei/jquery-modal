import gulp from 'gulp';
import sass from 'gulp-sass';
import * as dartSass from 'sass';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import sourcemaps from 'gulp-sourcemaps';
import rename from 'gulp-rename';
import { exec } from 'child_process';
import { promisify } from 'util';
import cssbeautify from 'gulp-cssbeautify';
import ejs from 'gulp-ejs';
import fs from 'fs';
import browserSync from 'browser-sync';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';

const execAsync = promisify(exec);
const sassCompiler = sass(dartSass);

// distディレクトリの作成
function ensureDistDir() {
  if (!fs.existsSync('./dist')) {
    fs.mkdirSync('./dist', { recursive: true });
  }
  if (!fs.existsSync('./dist/js')) {
    fs.mkdirSync('./dist/js', { recursive: true });
  }
}

// Stylelintタスクを修正（--fixオプションを追加）
gulp.task('lint-scss', async function() {
  try {
    const { stdout, stderr } = await execAsync('npx stylelint "./src/**/*.scss" --fix');
    if (stdout) console.log(stdout);
    if (stderr) console.error(stderr);
  } catch (error) {
    // エラーの詳細情報を表示
    console.error('\x1b[31mStylelint found issues:\x1b[0m');
    if (error.message) console.error(error.message);
    if (error.stderr) console.error(error.stderr);
    if (error.stdout) console.error(error.stdout);
    // エラーがあった場合でもタスクを継続
  }
});

// SCSSのコンパイルタスク
gulp.task('sass', gulp.series('lint-scss', function() {
  // 非圧縮版の生成
  const unminified = gulp.src('./src/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sassCompiler({
      includePaths: ['node_modules']
    }).on('error', sassCompiler.logError))
    .pipe(autoprefixer())
    .pipe(cssbeautify({
      indent: '  ',
      autosemicolon: true,
      openbrace: 'end-of-line',
      removeEmptyRules: true
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist'));

  // 圧縮版の生成（圧縮版は整形不要なのでそのまま）
  const minified = gulp.src('./src/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sassCompiler().on('error', sassCompiler.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist'));

  return Promise.all([unminified, minified]);
}));

// EJSのコンパイルタスク
gulp.task('ejs', function() {
  console.log('EJS compilation started...');
  ensureDistDir(); // distディレクトリの作成を確実に行う

  const config = JSON.parse(fs.readFileSync('./ejs/config.json', 'utf-8'));

  return gulp.src(['./src/**/*.ejs', '!./src/**/_*.ejs'])
    .pipe(ejs({config: config}))
    .pipe(rename({ extname: '.html' }))
    .pipe(gulp.dest('./dist'))
    .on('end', () => {
      console.log('EJS compilation completed!');
    });
});

// 画像ファイルのコピータスク
gulp.task('copy-images', function() {
  return gulp.src('./src/**/*.{png,jpg,jpeg,gif,svg,webp}')
    .pipe(gulp.dest('./dist'))
    .on('end', () => {
      console.log('Image files copied successfully!');
    });
});

// jQueryファイルのコピータスク
gulp.task('copy-jquery', function() {
  return gulp.src('./node_modules/jquery/dist/jquery.min.js')
    .pipe(gulp.dest('./dist/lib'))
    .on('end', () => {
      console.log('jQuery files copied successfully!');
    });
});

// JavaScriptのコンパイルタスク
gulp.task('js', function() {
  ensureDistDir(); // dist/jsディレクトリの作成を確実に行う

  // 非圧縮版の生成
  const unminified = gulp.src('./src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist'));

  // 圧縮版の生成
  const minified = gulp.src('./src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist'));

  return Promise.all([unminified, minified]);
});

// ファイルの変更を監視
gulp.task('watch', function() {
  browserSync.init({
    server: {
      baseDir: './dist',
      index: 'index.html'
    },
    files: ['./dist/**/*'],
    open: true,
    notify: false
  });

  gulp.watch('./src/**/*.scss', gulp.series('sass'));
  gulp.watch(['./src/**/*.ejs', '!./src/ejs/**/_*.ejs'], gulp.series('ejs'));
  gulp.watch('./src/**/*.{png,jpg,jpeg,gif,svg,webp}', gulp.series('copy-images'));
  gulp.watch('./src/**/*.js', gulp.series('js'));
});

// デフォルトタスク
gulp.task('default', gulp.series('sass', 'ejs', 'copy-images', 'copy-jquery', 'js', 'watch'));
