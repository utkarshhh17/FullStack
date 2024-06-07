pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Replace with your repository URL and branch
                git url: 'https://github.com/utkarshhh17/FullStack.git', branch: 'main'
            }
        }
        stage('Verify Files') {
            steps {
                echo 'Verifying files in workspace'
                // List the contents of the workspace
                sh 'ls -la'
                // Verify backend directory
                sh '''
                if [ -d "backend" ]; then
                    echo "Backend directory is present"
                else
                    echo "Backend directory is missing" && exit 1
                fi
                '''
                // Verify client directory
                sh '''
                if [ -d "client" ]; then
                    echo "Client directory is present"
                else
                    echo "Client directory is missing" && exit 1
                fi
                '''
            }
        }
        stage('Build Backend') {
            steps {
                echo 'Building Backend Application'
                // Change to the backend directory
                dir('backend') {
                    // Install dependencies and build the backend
                    sh 'npm install'
                    // You might have other build steps for your backend, e.g., compile TypeScript
                    // sh 'npm run build'
                }
            }
        }
        stage('Build Client') {
            steps {
                echo 'Building Client Application'
                // Change to the client directory
                dir('client') {
                    // Install dependencies and build the client
                    sh 'npm install'
                    // You might have other build steps for your client, e.g., build React app
                    sh 'npm run build'
                }
            }
        }
    }
}
