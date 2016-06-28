const exec = require('child_process').exec
const gulp = require('gulp')
const del = require('del')

const targetDir = 'articles'
const webrootDir = 'webroot'

const reviewConfig = 'config.yml'
const reviewPrefix = 'bundle exec'
const reviewCompile = `${reviewPrefix} review-compile`
const reviewWebMaker = `${reviewPrefix} review-webmaker`
const reviewPdfMaker = `${reviewPrefix} review-pdfmaker`
const reviewEpubMaker = `${reviewPrefix} review-epubmaker`

gulp.task('web', () => {
  process.chdir(targetDir)
  exec(`${reviewWebMaker} ${reviewConfig}`)
})

gulp.task('pdf', () => {
  process.chdir(targetDir)
  exec(`${reviewPdfMaker} ${reviewConfig}`)
})

gulp.task('clean', done => {
  del([`${targetDir}/${webrootDir}`]).then(paths => {
    console.log('Deleted files and folders:\n', paths.join('\n'))
    done()
  })
})
