pipeline {
    agent { dockerfile true label 'node-server'  }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
                sh 'svn --version'
            }
        }
    }
}