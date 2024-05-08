<template>
    <div class="container">
        <div class="button-container">
            <el-button type="info" @click="downloadFile">DOWNLOAD GUIDES</el-button>
        </div>
        <div class="file-inputs">
            <input type="file" @change="handleFileChange($event, 'pyFile')" accept=".py" class="file-input">
            <input type="file" @change="handleFileChange($event, 'ptFile')" accept=".pt" class="file-input">
        </div>
        <div class="description-and-upload">
            <input type="text" v-model="description" placeholder="Enter Submission Code" class="description-input">
            <button @click="uploadFiles" class="upload-button">Upload Files</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pyFile: null,
            ptFile: null,
            description: ''
        };
    },
    methods: {
        downloadFile() {
            // 创建一个指向后端下载链接的 a 元素，并模拟点击
            const link = document.createElement('a');
            link.href = 'http://localhost:8000/download/'; // 替换成你的 Django 服务器地址和下载路径
            link.setAttribute('download', 'downloaded_file.zip'); // 可以指定下载文件的名称
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        },
        handleFileChange(event, key) {
            this[key] = event.target.files[0];
        },
        uploadFiles() {
            if (!this.pyFile || !this.ptFile || !this.description) {
                alert('Please select both files and enter the description.');
                return;
            }

            const formData = new FormData();
            formData.append('pyFile', this.pyFile);
            formData.append('ptFile', this.ptFile);
            formData.append('description', this.description);
            this.ajax.post('submit/', formData, this, {
                success(res) {
                    if (res.status === 'success') {
                        this.alert_msg.success('Upload Success');
                    } else {
                        this.alert_msg.error('wrong code or model');
                    }

                },
                error() {
                    this.alert_msg.error('error');
                }
            }, {
                form: true,
                async: false
            });
        }
    }
}
</script>

<style scoped>
.container {
    width: 80%;
    margin: 20px auto;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.button-container {
    margin-bottom: 20px;
}

.file-inputs {
    margin-bottom: 20px;
    justify-content: center;
    gap: 20px;
}

.file-input {
    margin: 10px 20px;
    cursor: pointer;
}

.description-and-upload {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
}

.description-input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.upload-button {
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.upload-button:hover {
    background-color: #0056b3;
}
</style>
