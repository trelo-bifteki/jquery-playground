pipeline {
  agent {
    docker {
      image 'node:10-alpine'
    }
  }

  environment {
    CI = 'true'
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
