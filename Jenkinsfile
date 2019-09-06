pipeline {
  agent {
    docker {
      image 'node:10-alpine'
    }
  }

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
