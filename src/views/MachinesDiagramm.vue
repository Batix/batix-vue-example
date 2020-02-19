<template>
  <div>
    <div class="row mt-5">
      <div class="col-xl-6">
        <h1 class="display-4">Maschinen</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-2">
        <div class="row">
          <div v-for="m in machines" :key="m.id" class="col-xl-12">
            <div class="form-check form-check-inline">
              <input v-model="filteredMachines" class="form-check-input" type="checkbox" :value="m" />
              <span style="width: 30px; height: 15px" :style="{ 'background-color': m.color }"></span>
              <label class="form-check-label">{{ m.name }}</label>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-10 p-5">
        <doughnut-chart
          v-if="machines"
          :chart-data="chartData"
          :options="{responsive: true, maintainAspectRatio: false, legend: { display: false }}"
        ></doughnut-chart>
      </div>
    </div>
  </div>
</template>

<script>
import DoughnutChart from "@/components/DoughnutChart";
import store from "@/store";
import Diagramm from "@/mixins/Diagram";

export default {
    name: "Absolut",
    components: { DoughnutChart },
    mixins: [Diagramm],
    store,
    props: {},
    data() {
        return {};
    },
    computed: {
        chartData() {
            var self = this;
            return {
                labels: this.filteredMachines.map(m => m.name),
                datasets: [
                    {
                        backgroundColor: self.filteredMachines.map(
                            m => m.color
                        ),
                        data: this.filteredMachines.map(m => {
                            return m.capacity;
                        })
                    }
                ]
            };
        },
        chartOptions() {
            return {
                legend: {
                    display: false
                },
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [
                        {
                            type: "time",
                            time: {
                                unit: "month",
                                unitStepSize: 1,
                                minUnit: "day"
                            }
                        }
                    ]
                }
            };
        }
    }
};
</script>

<style></style>
