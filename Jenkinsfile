pipeline {
  agent any
  environment {
    HOME = '.'
  }
  stages {
    stage('Prepare') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Prepare') {
      steps {
        sh 'npm run build'
      }
    }    
  }
}
