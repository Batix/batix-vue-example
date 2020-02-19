<script>
import { Doughnut, mixins } from "vue-chartjs";

export default {
    name: "LineChart",
    extends: Doughnut,
    mixins: [mixins.reactiveProp],
    mounted() {
        this.renderChart(this.chartData, this.options);
    }
};
</script>

<style>
</style>