const { execSync } = require('child_process');
const path = require('path');

// Build frontend
console.log('Building frontend...');
try {
    execSync('cd .. && npm install && npm run build', { stdio: 'inherit' });
} catch (error) {
    console.error('Frontend build failed:', error);
    process.exit(1);
}

// Build backend
console.log('Building backend...');
try {
    execSync('npm run build', { stdio: 'inherit' });
} catch (error) {
    console.error('Backend build failed:', error);
    process.exit(1);
}

console.log('Build complete! You can now run: npm start');