<template>
	<transition name="slide-fade">
		<view class="attendanceCar" v-if="vuex_tasks.length!=0">
			<u-row>
				<u-col span="12" v-for="(task,index) in vuex_tasks" :key="index">
					<view class="" @click="go_to(task)">
						<qz-car img_size="150rpx" :img="task.img" :opacity='0.6'>
							<view class="u-p-15">
								<text class="u-block u-skeleton-rect u-font-xl u-m-b-10">{{task.title}}</text>
								<text
									class="u-block u-skeleton-rect u-font-xs u-m-b-20 u-type-info u-line-2">{{task.msg1}}</text>
								<text
									class="u-block u-blok u-skeleton-rect u-font-xs u-m-b-10 u-type-info">{{task.msg2}}</text>
							</view>
						</qz-car>
					</view>
					<view class="u-m-b-30"></view>
				</u-col>
			</u-row>
		</view>
	</transition>
</template>

<script>
	export default {
		data() {
			return {}
		},
		created() {
			this.$store.dispatch('init_my_task')
		},
		methods: {
			go_to(task) {
				var _url = {
					'0': 'pages/attendance/floor',
					'1': 'pages/attendance/floor',
					'2': 'pages/attendance/late', // 晚自修
				};
				this.$store.dispatch('save', ['vuex_task', task])
				this.$u.route(_url[task.type])
			},
		}
	}
</script>

<style lang="scss">
	.slide-fade-enter-active {
		transition: all .3s ease;
		transition-delay: .5s;
	}

	.slide-fade-leave-active {
		transition: all 0.1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}

	.slide-fade-enter,
	.slide-fade-leave-to

	/* .slide-fade-leave-active for below version 2.1.8 */
		{
		transform: translateX(10px);
		opacity: 0;
	}
</style>
