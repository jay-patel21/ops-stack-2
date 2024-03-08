pipeline {
    agent { docker { image 'node:20.11.1-alpine3.19' } label 'node-agent'  }
    stages {
        stage('Test') {
            steps {
                sh 'whoami'
                sh 'docker images'
                sh 'node --version'
                sh 'svn --version'
            }
        }
    }
}