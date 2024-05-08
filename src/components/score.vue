<template>
    <div class="score-container">
        <h1>Your Score</h1>
        <div class="search-container">
            <input type="text" v-model="studentId" placeholder="Enter Submission Code" />
            <button @click="fetchScore">Check Score</button>
        </div>
        <div class="scores">
            <div class="score-item">
                <strong>ATK:</strong>
                <span>{{ atk_current_score }}</span>
                <strong>Ranking:</strong>
                <span>{{ atk_current_ranking }}</span>
                <strong>Percentage:</strong>
                <span>{{ atk_current_percentage }}%</span>
            </div>
            <div class="score-item">
                <strong>DEF:</strong>
                <span>{{ def_current_score }}</span>
                <strong>Ranking:</strong>
                <span>{{ def_current_ranking }}</span>
                <strong>Percentage:</strong>
                <span>{{ def_current_percentage }}%</span>
            </div>
            <div class="score-item">
                <strong>AVG:</strong>
                <span>{{ avg_current_score }}</span>
                <strong>Ranking:</strong>
                <span>{{ avg_current_ranking }}</span>
                <strong>Percentage:</strong>
                <span>{{ avg_current_percentage }}%</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "score",
    data() {
        return {
            studentId: '',
            atk_current_score: "N/A",
            atk_current_ranking: "N/A",
            atk_current_percentage: "N/A",
            def_current_score: "N/A",
            def_current_ranking: "N/A",
            def_current_percentage: "N/A",
            avg_current_score: "N/A",
            avg_current_ranking: "N/A",
            avg_current_percentage: "N/A"
        }
    },
    methods: {
        fetchScore() {
            // Simulate an API call with static data for demonstration
            // Replace with actual API call logic
            var data = {'subcode': this.studentId};
            this.ajax.get('check/', data, this, {
                success(res) {
                    if (res.status === 'success') {
                        this.atk_current_score = res.attack;
                        this.atk_current_ranking = res.attack_rank;
                        this.atk_current_percentage = res.attack_per;
                        this.def_current_score = res.defend;
                        this.def_current_ranking = res.defend_rank;
                        this.def_current_percentage = res.defend_per;
                        this.avg_current_score = res.average;
                        this.avg_current_ranking = res.average_rank;
                        this.avg_current_percentage = res.average_per;
                        this.alert_msg.success('success');
                    } else {
                        this.resetScores();
                        this.alert_msg.error('no score');
                    }
                },
                error(){
                    this.resetScores();
                    this.alert_msg.error('error');
                }
            }, {
                async: false
            });
        },
        resetScores() {
            this.atk_current_score = "N/A";
            this.atk_current_ranking = "N/A";
            this.atk_current_percentage = "N/A";
            this.def_current_score = "N/A";
            this.def_current_ranking = "N/A";
            this.def_current_percentage = "N/A";
            this.avg_current_score = "N/A";
            this.avg_current_ranking = "N/A";
            this.avg_current_percentage = "N/A";
        }
    }
}
</script>

<style scoped>
.score-container {
    max-width: 600px;
    margin: 20px auto;
    margin-top: 50px;
    padding: 20px;
    background-color: #f4f4f4;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
}

h1 {
    text-align: center;
    color: #333;
}

.scores, .search-container {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}

.score-item, .search-container {
    text-align: center;
}

.score-item strong, .search-container input, .search-container button {
    display: block;
    color: #555;
    margin-bottom: 5px;
}

.score-item span {
    color: #000;
    font-weight: bold;
    display: block;
    margin-bottom: 10px;
}

.search-container input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 10px;
}

.search-container button {
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.search-container button:hover {
    background-color: #0056b3;
}
</style>
