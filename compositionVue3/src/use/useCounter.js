import { computed, reactive, watch, nextTick } from "vue";

const counterData = reactive({
    count: 0,
    title: "CounterApp",
});
export function useCounter() {

    watch(() => counterData.count, (newCount) => {
        if (newCount >= 20) counterData.count = 1
    })

    const oddOrEven = computed(() => {
        return counterData.count % 2 === 0 ? "even" : "odd";
    });

    const increment = async (amount) => {
        counterData.count = counterData.count + amount;
        await nextTick(() => {
            console.log('dom updated')
        })

    }

    const decrement = (amount) => {
        counterData.count -= amount;
    }

    return {
        increment,
        decrement,
        oddOrEven,
        counterData
    }
}