<template>
    <div class="EpisodeList">
        <div>
            <h3> Episode {{ EP.name }}</h3>
            <p><i class="fa-solid fa-clock"></i> {{ EP.duration }} min</p>
            <p>{{ EP.desc }}</p>
        </div>

        <p>{{ EP.video }}</p>
    </div>
</template>


<script setup lang="ts">import type { episodeInterface } from '@/interface/episode.interface';




defineProps<
    {
        EP: episodeInterface
    }>()

</script>


<style scoped>
.fa-solid {
    color: white
}

.EpisodeList {
    border: 1px solid rgba(105, 105, 105, 0.425);
    width: 100%;
    height: 200px;
    padding: 10px;
    margin: 10px 0;
    display: flex;
    flex-direction: row-reverse;
    color: white;
    cursor: pointer;
}

.EpisodeList p {
    flex: 150px 0 0;
}

.EpisodeList div {
    flex: 1 0 0;

}

.EpisodeList div p {
    font-size: 17px;
}


@media(max-width :1200px) {
    .EpisodeList {
        border: 1px solid rgba(105, 105, 105, 0.425);
        width: 100%;
        height: 200px;
        padding: 10px;
        margin: 10px 0;
        display: flex;
        flex-direction: row-reverse;
    }

    .EpisodeList p {
        flex: 150px 0 0;
    }

    .EpisodeList div {
        flex: 1 0 0;

    }

    .EpisodeList div p {
        font-size: 16px;
    }
}

@media(max-width :992px) {
    .EpisodeList {
        border: 1px solid rgba(105, 105, 105, 0.425);
        width: 100%;
        height: 200px;
        padding: 10px;
        margin: 10px 0;
        display: flex;
        flex-direction: row-reverse;
    }

    .EpisodeList p {
        flex: 150px 0 0;
    }

    .EpisodeList div {
        flex: 1 0 0;

    }

    .EpisodeList div p {
        font-size: 15px;
    }
}

@media(max-width : 768px) {
    .EpisodeList {
        border: 1px solid rgba(105, 105, 105, 0.425);
        width: 100%;
        height: 200px;
        padding: 10px;
        margin: 10px 0;
        display: flex;
        flex-direction: row-reverse;
    }

    .EpisodeList p {
        flex: 150px 0 0;
    }

    .EpisodeList div {
        flex: 1 0 0;

    }

    .EpisodeList div p {
        font-size: 12px;
    }
}


@media (max-width: 576px) {
    .EpisodeList {
        border: 1px solid rgba(105, 105, 105, 0.425);
        width: 100%;
        height: 200px;
        padding: 10px;
        margin: 10px 0;
        display: flex;
        flex-direction: row-reverse;

    }

    .EpisodeList p {
        flex: 150px 0 0;
    }

    .EpisodeList div {
        flex: 1 0 0;

    }

    .EpisodeList div p {
        font-size: 11px;
    }
}
</style>