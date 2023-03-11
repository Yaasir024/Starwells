<template>
  <section class="pt-[100px] px-[35px]  lg:px-[60px] xl:px-[120px]">
    <div class="flex items-center justify-center">
      <div class="btns-container">
        <button class="btn monthly active">
          <span class="">Monthly</span>
        </button>
        <button class="btn yearly"><span class="">Yearly (save 25%)</span></button>
      </div>
    </div>
    <div class="mt-[56px] flex flex-wrap">
      <div class="flex-full md:flex-50% xl:flex-33.33% px-[12px] mb-5">
        <div class="card-white p-[24px]">
          <button class="icon-head flex items-center justify-center">
            <img src="@/assets/icons/pricing/flash-black.svg" alt="" class="" />
          </button>
          <div class="">
            <p class="text-[24px] leading-[32px] tracking-[-0.016em] font-semibold mt-[24px]">
              Standard
            </p>
            <h1 class="text-[48px] leading-[54px] tracking-[-0.02em] font-semibold mt-[24px]">
              $10.99
              <sub
                class="text-[14px] leading-[24px] tracking-[-0.016em] font-normal text-alpha-black"
                >/month</sub
              >
            </h1>
          </div>
          <div class="mt-[24px]">
            <ul class="border-y py-[24px]">
              <li class="flex items-center">
                <button class="icon-btn flex items-center justify-center">
                  <img src="@/assets/icons/pricing/clients.svg" alt="" class="" />
                </button>
                <span class="text-[16px] leading-[24px] tracking-[-0.01em] font-medium ml-[12px]"
                  >200 Clients</span
                >
              </li>
              <li class="flex items-center mt-[16px]">
                <button class="icon-btn flex items-center justify-center">
                  <img src="@/assets/icons/pricing/inventory.svg" alt="" class="" />
                </button>
                <span class="text-[16px] leading-[24px] tracking-[-0.01em] font-medium ml-[12px]"
                  >Unlimited Inventory Management</span
                >
              </li>
              <li class="flex items-center mt-[16px]">
                <button class="icon-btn flex items-center justify-center">
                  <img src="@/assets/icons/pricing/user.svg" alt="" class="" />
                </button>
                <span class="text-[16px] leading-[24px] tracking-[-0.01em] font-medium ml-[12px]"
                  >Multiple User Support</span
                >
              </li>
              <li class="flex items-center mt-[16px]">
                <button class="icon-btn flex items-center justify-center">
                  <img src="@/assets/icons/pricing/db.svg" alt="" class="" />
                </button>
                <span class="text-[16px] leading-[24px] tracking-[-0.01em] font-medium ml-[12px]"
                  >Daily Backup</span
                >
              </li>
              <li class="flex items-center mt-[16px]">
                <button class="icon-btn flex items-center justify-center">
                  <img src="@/assets/icons/pricing/uptime.svg" alt="" class="" />
                </button>
                <span class="text-[16px] leading-[24px] tracking-[-0.01em] font-medium ml-[12px]"
                  >99.9% Uptime</span
                >
              </li>
              <li class="flex items-center mt-[16px]">
                <button class="icon-btn flex items-center justify-center">
                  <img src="@/assets/icons/pricing/account.svg" alt="" class="" />
                </button>
                <span class="text-[16px] leading-[24px] tracking-[-0.01em] font-medium ml-[12px]"
                  >Dedicated Account Manager</span
                >
              </li>
              <li class="flex items-center mt-[16px]">
                <button class="icon-btn flex items-center justify-center">
                  <img src="@/assets/icons/pricing/support.svg" alt="" class="" />
                </button>
                <span class="text-[16px] leading-[24px] tracking-[-0.01em] font-medium ml-[12px]"
                  >Premium Support</span
                >
              </li>
            </ul>
            <button class="get-started mt-[24px]">Get Started</button>
          </div>
        </div>
      </div>
      <div class="flex-full md:flex-50% xl:flex-33.33% px-[12px] mb-5">
        <div class="card-gradient p-[24px]">
          <div class="flex items-center justify-between">
            <button class="icon-head flex items-center justify-center">
              <img src="@/assets/icons/pricing/flash-white.svg" alt="" class="" />
            </button>
            <button class="py-[2px] px-[8px] bg-white rounded-[20px]">Most popular</button>
          </div>
          <div class="">
            <p class="text-[24px] leading-[32px] tracking-[-0.016em] font-semibold mt-[24px]">
              Unlimited
            </p>
            <h1 class="text-[48px] leading-[54px] tracking-[-0.02em] font-semibold mt-[24px]">
              $14.99
              <sub
                class="text-[14px] leading-[24px] tracking-[-0.016em] font-normal text-alpha-black"
                >/month</sub
              >
            </h1>
          </div>
          <div class="mt-[24px]">
            <ul class="border-y py-[24px]">
              <li class="flex items-center">
                <button class="icon-btn flex items-center justify-center">
                  <img src="@/assets/icons/pricing/clients.svg" alt="" class="" />
                </button>
                <span class="text-[16px] leading-[24px] tracking-[-0.01em] font-medium ml-[12px]"
                  >200 Clients</span
                >
              </li>
              <li class="flex items-center mt-[16px]">
                <button class="icon-btn flex items-center justify-center">
                  <img src="@/assets/icons/pricing/inventory.svg" alt="" class="" />
                </button>
                <span class="text-[16px] leading-[24px] tracking-[-0.01em] font-medium ml-[12px]"
                  >Unlimited Inventory Management</span
                >
              </li>
              <li class="flex items-center mt-[16px]">
                <button class="icon-btn flex items-center justify-center">
                  <img src="@/assets/icons/pricing/user.svg" alt="" class="" />
                </button>
                <span class="text-[16px] leading-[24px] tracking-[-0.01em] font-medium ml-[12px]"
                  >Multiple User Support</span
                >
              </li>
              <li class="flex items-center mt-[16px]">
                <button class="icon-btn flex items-center justify-center">
                  <img src="@/assets/icons/pricing/db.svg" alt="" class="" />
                </button>
                <span class="text-[16px] leading-[24px] tracking-[-0.01em] font-medium ml-[12px]"
                  >Daily Backup</span
                >
              </li>
              <li class="flex items-center mt-[16px]">
                <button class="icon-btn flex items-center justify-center">
                  <img src="@/assets/icons/pricing/uptime.svg" alt="" class="" />
                </button>
                <span class="text-[16px] leading-[24px] tracking-[-0.01em] font-medium ml-[12px]"
                  >99.9% Uptime</span
                >
              </li>
              <li class="flex items-center mt-[16px]">
                <button class="icon-btn flex items-center justify-center">
                  <img src="@/assets/icons/pricing/account.svg" alt="" class="" />
                </button>
                <span class="text-[16px] leading-[24px] tracking-[-0.01em] font-medium ml-[12px]"
                  >Dedicated Account Manager</span
                >
              </li>
              <li class="flex items-center mt-[16px]">
                <button class="icon-btn flex items-center justify-center">
                  <img src="@/assets/icons/pricing/support.svg" alt="" class="" />
                </button>
                <span class="text-[16px] leading-[24px] tracking-[-0.01em] font-medium ml-[12px]"
                  >Premium Support</span
                >
              </li>
            </ul>
            <button class="get-started mt-[24px]">Get Started</button>
          </div>
        </div>
      </div>
      <div class="flex-full md:flex-50% xl:flex-33.33% px-[12px] mb-5">
        <div class="card-white p-[24px]">
          <button class="icon-head flex items-center justify-center">
            <img src="@/assets/icons/pricing/india.svg" alt="" class="" />
          </button>
          <div class="">
            <p class="text-[24px] leading-[32px] tracking-[-0.016em] font-semibold mt-[24px]">
              For India only
            </p>
            <h1 class="text-[48px] leading-[54px] tracking-[-0.02em] font-semibold mt-[24px]">
              ₹2499
              <sub
                class="text-[14px] leading-[24px] tracking-[-0.016em] font-normal text-alpha-black"
                >/month</sub
              >
            </h1>
          </div>
          <div class="mt-[24px]">
            <ul class="border-y py-[24px]">
              <li class="flex items-center">
                <button class="icon-btn flex items-center justify-center">
                  <img src="@/assets/icons/pricing/clients.svg" alt="" class="" />
                </button>
                <span class="text-[16px] leading-[24px] tracking-[-0.01em] font-medium ml-[12px]"
                  >200 Clients</span
                >
              </li>
              <li class="flex items-center mt-[16px]">
                <button class="icon-btn flex items-center justify-center">
                  <img src="@/assets/icons/pricing/inventory.svg" alt="" class="" />
                </button>
                <span class="text-[16px] leading-[24px] tracking-[-0.01em] font-medium ml-[12px]"
                  >Unlimited Inventory Management</span
                >
              </li>
              <li class="flex items-center mt-[16px]">
                <button class="icon-btn flex items-center justify-center">
                  <img src="@/assets/icons/pricing/user.svg" alt="" class="" />
                </button>
                <span class="text-[16px] leading-[24px] tracking-[-0.01em] font-medium ml-[12px]"
                  >Multiple User Support</span
                >
              </li>
              <li class="flex items-center mt-[16px]">
                <button class="icon-btn flex items-center justify-center">
                  <img src="@/assets/icons/pricing/db.svg" alt="" class="" />
                </button>
                <span class="text-[16px] leading-[24px] tracking-[-0.01em] font-medium ml-[12px]"
                  >Daily Backup</span
                >
              </li>
              <li class="flex items-center mt-[16px]">
                <button class="icon-btn flex items-center justify-center">
                  <img src="@/assets/icons/pricing/uptime.svg" alt="" class="" />
                </button>
                <span class="text-[16px] leading-[24px] tracking-[-0.01em] font-medium ml-[12px]"
                  >99.9% Uptime</span
                >
              </li>
              <li class="flex items-center mt-[16px]">
                <button class="icon-btn flex items-center justify-center">
                  <img src="@/assets/icons/pricing/account.svg" alt="" class="" />
                </button>
                <span class="text-[16px] leading-[24px] tracking-[-0.01em] font-medium ml-[12px]"
                  >Dedicated Account Manager</span
                >
              </li>
              <li class="flex items-center mt-[16px]">
                <button class="icon-btn flex items-center justify-center">
                  <img src="@/assets/icons/pricing/support.svg" alt="" class="" />
                </button>
                <span class="text-[16px] leading-[24px] tracking-[-0.01em] font-medium ml-[12px]"
                  >Premium Support</span
                >
              </li>
            </ul>
            <button class="get-started mt-[24px]">Get Started</button>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-[114px]">
      <div class="flex flex-wrap">
        <div class="flex-full sm:flex-50% lg:flex-33.33% flex flex-col items-center justify-center px-[12px] mb-5">
            <img src="@/assets/icons/pricing/client-coloured.svg" alt="" class="" />
            <h1 class="text-[20px] leading-[28px] tracking-[-0.014em] font-semibold mt-[26px] text-center">Dedicated Support Team</h1>
            <p class="text-[16px] text-alpha-black leading-[24px] tracking-[-0.01em] mt-[16px] text-center max-w-[380px]">Starwells offers dedicated support teams to provide customers with exceptional support.</p>
        </div>
        <div class="flex-full sm:flex-50% lg:flex-33.33% flex flex-col items-center justify-center px-[12px] mb-5">
            <img src="@/assets/icons/pricing/charges-coloured.svg" alt="" class="" />
            <h1 class="text-[20px] leading-[28px] tracking-[-0.014em] font-semibold mt-[26px] text-center">No Hidden Charges</h1>
            <p class="text-[16px] text-alpha-black leading-[24px] tracking-[-0.01em] mt-[16px] text-center max-w-[380px]">No sneaky pricing tricks here. You'll have access to everything you need without additional charges.</p>
        </div>
        <div class="flex-full sm:flex-50% lg:flex-33.33% flex flex-col items-center justify-center px-[12px] mb-5">
            <img src="@/assets/icons/pricing/uptime-coloured.svg" alt="" class="" />
            <h1 class="text-[20px] leading-[28px] tracking-[-0.014em] font-semibold mt-[26px] text-center">99.9% uptime</h1>
            <p class="text-[16px] text-alpha-black leading-[24px] tracking-[-0.01em] mt-[16px] text-center max-w-[380px]">We boast of 99.9% uptime, ensuring you can manage your finances without interruptions.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.btns-container {
  padding: 6px;
  background: #f6f6f8;
  border-radius: 38px;
}
.btns-container .btn {
  border-radius: 38px;
  padding: 13px 25px;
}
.btns-container .btn.active {
  background: #ffffff;

  box-shadow: 0px 1px 3px rgba(47, 43, 67, 0.1), inset 0px -1px 0px rgba(47, 43, 67, 0.1);

  text-align: center;
  letter-spacing: -0.01em;

  /* orange */
}
.btns-container .btn.active span {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
}
.btns-container .btn.active span {
  background: linear-gradient(90deg, #ff3a31 0.01%, #ffae01 100.01%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
.card-white {
  background: #ffffff;
  /* Alpha-black/10% */

  border: 1px solid rgba(47, 43, 67, 0.1);
  border-radius: 24px;
}
.card-white .icon-head {
  width: 48px;
  height: 48px;

  background: #ffffff;

  border: 1px solid rgba(47, 43, 67, 0.1);

  box-shadow: 0px 1px 3px rgba(47, 43, 67, 0.1), inset 0px -1px 0px rgba(47, 43, 67, 0.1);
  border-radius: 40px;
}
.icon-btn {
  width: 48px;
  height: 48px;

  background: #ffffff;

  border: 1px solid rgba(47, 43, 67, 0.1);

  box-shadow: 0px 1px 3px rgba(47, 43, 67, 0.1), inset 0px -1px 0px rgba(47, 43, 67, 0.1);
  border-radius: 40px;
}

.card-white .get-started {
  padding: 12px 16px;
  width: 100%;
  background: #ffffff;
  border: 1px solid rgba(47, 43, 67, 0.1);
  box-shadow: 0px 1px 3px rgba(47, 43, 67, 0.1), inset 0px -1px 0px rgba(47, 43, 67, 0.1);
  border-radius: 12px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  text-align: center;
  letter-spacing: -0.01em;
  color: #000000;
}

.card-gradient {
  background: radial-gradient(137.05% 100% at 50% 0%, #ffe0d6 5.59%, #ffeee0 62.66%, #ffffff 100%);
  /* Alpha-black/10% */

  border: 1px solid rgba(47, 43, 67, 0.1);
  border-radius: 24px;
}
.card-gradient .icon-head {
  width: 48px;
  height: 48px;

  background: linear-gradient(90deg, #ff3a31 0.01%, #ffae01 100.01%);
  /* Alpha-black/10% */

  border: 1px solid rgba(47, 43, 67, 0.1);

  box-shadow: 0px 1px 3px rgba(47, 43, 67, 0.1), inset 0px -1px 0px rgba(47, 43, 67, 0.1);
  border-radius: 40px;
}
.card-gradient .get-started {
  padding: 12px 16px;
  width: 100%;
  background: linear-gradient(90deg, #ff3a31 0.01%, #ffae01 100.01%);
  /* Shadows/1 */

  box-shadow: 0px 1px 3px rgba(47, 43, 67, 0.1), inset 0px -1px 0px rgba(47, 43, 67, 0.1);
  box-shadow: 0px 1px 3px rgba(47, 43, 67, 0.1), inset 0px -1px 0px rgba(47, 43, 67, 0.1);
  border-radius: 12px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  text-align: center;
  letter-spacing: -0.01em;
  color: #ffffff;
}
</style>
