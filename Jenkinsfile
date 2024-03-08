pipeline {
    agent { label 'node-agent'}
    stages {
        stage('Test') {
            agent {
                dockerfile true
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
