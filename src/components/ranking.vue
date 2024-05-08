<template>
    <div class="ranking-container">
        <h1>Ranking</h1>
        <el-table :data="tableData" style="width: 100%" row-class-name="table-row" highlight-current-row>
            <el-table-column prop="nickname" label="Nick Name" min-width="180">
            </el-table-column>
            <el-table-column prop="student_no" label="Student No." min-width="180">
            </el-table-column>
            <el-table-column prop="score" label="Avg. Score" min-width="120" :formatter="formatScore">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    name: "ranking",
    data() {
        return {
            tableData: [
                //{ nickname: "Jack", student_no: 1023853, score: 56.231 },
                //{ nickname: "Rose", student_no: 1023854, score: 78.519 },
                //{ nickname: "Emma", student_no: 1023855, score: 92.347 },
                //{ nickname: "James", student_no: 1023856, score: 85.123 }
            ],
        }
    },
    mounted() {
        this.ajax.get('top/', {}, this, {
            success(res) {
                if (res.status === 'success') {
                    this.tableData = res.data;
                    //this.alert_msg.success('success');
                } else {
                    this.alert_msg.error('error ranking');
                }
            },
            error() {
                this.alert_msg.error('error ranking');
            }
        }, {
            async: false
        });
    },
    methods: {
        formatScore(row, column, value) {
            return value.toFixed(2); // Format score to two decimal places
        }
    }
}
</script>

<style scoped>
.ranking-container {
    margin: 20px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    background-color: #FFFFFF;
}

h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #2c3e50;
}

.table-row {
    cursor: pointer;
}

.el-table .cell {
    text-align: center;
}
</style>