<template>
    <div class="title-container">
        <span class="word">ADVERSARIAL</span>
        <span class="word">ATTACKS & DEFENSES</span>
        <span class="word">COMPETITION</span>
    </div>
</template>

<script>
export default {
    name: "title_logo",
    data() {
        return {
            systime: "10:03",
        }
    },
    methods: {

    }
}
</script>

<style scoped>
.title-container {
    text-align: center;
    /* Center align the title */
    padding: 20px;
    /* Add padding around the text */
    margin-top: 100px;
    /* Add margin on the top */
    background-color: #2c3e50;
    /* A dark background color */
    border-radius: 8px;
    /* Rounded corners for the container */
}

.word {
    display: block;
    /* Each word takes a full line */
    color: #ecf0f1;
    /* Light color for the text to stand out against the dark background */
    font-family: 'Arial', sans-serif;
    /* Modern font */
    font-size: 24px;
    /* Sizable font for visibility */
    font-weight: bold;
    /* Make the font bold */
    margin-bottom: 20px;
    /* Add space between words */
}

/* Remove margin from the last word to avoid extra space at the bottom */
.word:last-child {
    margin-bottom: 0;
}
</style>