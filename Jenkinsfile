pipeline {
    agent { docker { image 'node:20.11.1' } label 'node-agent'  }
    stages {
        stage('Test') {
            steps {
                sh 'whoami'
                sh 'docker ps'
                sh 'node --version'
                sh 'svn --version'
            }
        }
    }
}
