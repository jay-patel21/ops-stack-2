pipeline {
    agent { label 'node-agent'}
    stages {
        stage('Test') {
            agent {
                docker { image 'node:20.11.1' }
                label 'node-agent'
            }
            steps {
                sh 'ip add'
                sh 'whoami'
                sh 'ls'
                sh 'node --version'
                sh 'svn --version'
            }
        }
    }
}
