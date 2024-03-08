pipeline {
    agent { dockerfile true label 'node-agent'  }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
                sh 'svn --version'
            }
        }
    }
}