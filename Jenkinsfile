pipeline {
  agent any

  environment {
    HOME = '.'
  }

  stages {
    stage('prepare') {
      steps {
        sh 'npm install'
      }
    }

    stage('build') {
      steps {
        sh 'npm run build'
      }
    }
  }
}
