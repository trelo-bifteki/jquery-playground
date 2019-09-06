pipeline {
  agent any

  environment {
    HOME = '.'
  }

  stages {
    stage('prepare') {
      steps {
        sh 'npm ci'
      }
    }

    stage('build') {
      steps {
        sh 'npm run build'
      }
    }
  }
}
