<template>
  <div>
    <div class="row mt-5">
      <div class="col-xl-6">
        <h1 class="display-4">Auslastung</h1>
      </div>
      <div class="col-xl-3">
        <div class="form-group">
          <label>Von</label>
          <div class="input-group mb-3">
            <input v-model="von" type="date" class="form-control" placeholder="Von" />
            <div class="input-group-append">
              <span class="input-group-text">
                <i class="fas fa-calendar"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3">
        <div class="form-group">
          <label>Bis</label>
          <div class="input-group mb-3">
            <input v-model="bis" type="date" class="form-control" placeholder="Bis" />
            <div class="input-group-append">
              <span class="input-group-text">
                <i class="fas fa-calendar"></i>
              </span>
            </div>
          </div>
        </div>
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
        <line-chart v-if="machinesData" :chart-data="chartData" :options="chartOptions"></line-chart>
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from "@/components/LineChart";
import store from "@/store";

import Diagramm from "@/mixins/Diagram";

export default {
    name: "Auslastung",
    components: { LineChart },
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
                labels: self.dates.map(d => d.toLocaleDateString()),
                datasets: this.filteredMachines.map(m => {
                    let data = self.machinesData[m.id]
                        .filter(
                            m =>
                                m.date >= this.vonDate && m.date <= this.bisDate
                        )
                        .sort((a, b) => a.date - b.date)
                        .map(md => {
                            return {
                                x: md.date.toLocaleDateString(),
                                y: (md.manufactured / m.capacity) * 100
                            };
                        });

                    return {
                        label: m.name,
                        fill: false,
                        borderColor: m.color,
                        backgroundColor: m.color,
                        data: data,
                        lineTension: 0.3
                    };
                })
            };
        },
        chartOptions() {
            return {
                legend: {
                    display: false
                },
                responsive: true,
                maintainAspectRatio: true,
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
                    ],
                    yAxes: [
                        {
                            scaleTitel: {
                                display: true,
                                labelString: "Auslastung in %"
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
