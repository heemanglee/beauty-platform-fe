import { Link } from 'react-router-dom';

/* ─── Mock Data ─── */

const weeklyBestProducts = [
  {
    id: '1',
    brand: 'SKINLAB',
    name: 'Aura Radiance Revitalizing Treatment Essence',
    price: '$42.00',
    originalPrice: '$58.00',
    rating: '4.9',
    reviews: '1,240',
    badges: ['1+1', 'SALE'],
    badgeColors: ['bg-glow-secondary', 'bg-glow-primary'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBUUWNVJO0yzuJ26jJ-jaKA5GdTaQUumH0fHpDCLwWmFolPnU02fUKdSGKR2TOUzBpOIufEOpvZGWL1-Fe2SQkzdGa6z_y4mGtWHykzpKSiU3LdueoxUhHNATqK_pqaj9xDdIuVC9X9JAIUzRsMOVICsyJZW_wD4cHi-KnxIauWCNQkjWH6OHKDuT65YU40SyG4GXk-Ih37mGtZF8KPPJ5pDbxC_gllGnFcDpZcAJTWx7H60hbxqMLKTBmVZDaZ5jdA9P3WO6H5EEO',
  },
  {
    id: '2',
    brand: 'BOTANIC HEAL',
    name: 'Bio-Heal Intense Firming Cream (50ml)',
    price: '$34.50',
    originalPrice: null,
    rating: '4.8',
    reviews: '892',
    badges: ['Vegan'],
    badgeColors: ['bg-glow-tertiary'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBISSMaCBj30f5hnSjlh7UFCRBigqeTbZ5fU5OWlk5bs9Fuxg6kzWPNNyNuXRk52rGsaQmwYA6o8RrxYIGgHKQ49hTC112jLnFx5Bh3ygu5b_I2ZAObjMbJPzkQTRucQoZ_V_tpLitKh8zr_hVKS5Na3dNIUFgE4F06vOrAUmDkB7_NXOW3m6To2r3FOsiEiUpjb-OQAHpr0XFGzQP4k5BHCL33ZGBMzcj2cpQcB5aSwz0eq_U_M73rQswb7w30WZN2QzHfEEJ_-YPI',
  },
  {
    id: '3',
    brand: 'GLOW RECIPE',
    name: 'Watermelon Glow Ultra-Fine Mist',
    price: '$28.00',
    originalPrice: '$32.00',
    rating: '4.7',
    reviews: '2,105',
    badges: ['SALE'],
    badgeColors: ['bg-glow-secondary'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuUHniL1xGn-CLAXtFd72iL8Nl1UOYGxAbhTQd9GFGwhOxgQ2_06PY0A63dTqS-3ozXg_4YM2CZo-qqhDK5jBOk_kfOJJ6EX0gqzT9btRpmvCHAXfqlDodLHf64CCnBOsxoesG1HL6YWheBTisk3cyWnrp9GxawE6yZvUMs2q7_I1uOsbfaAFadvdjm8qtfBacepKXhJgWbZCqtV_0VmQGk2hhuoGdFBzUBeAXq8lZqu6P7iGgNUOdbBciVrjwQN96N2Sre0Ao7nbY',
  },
  {
    id: '4',
    brand: 'ROM&ND',
    name: 'Juicy Lasting Tint - Bare Grape Series',
    price: '$13.90',
    originalPrice: null,
    rating: '4.9',
    reviews: '5,410',
    badges: [],
    badgeColors: [],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1a30WBTBvEpfvgk8xfYfbD4cEZL4oErG5MVLJczjTsD5Eo5FxC9Yyu5Qhr_HBjTvyaPR5QAaVi43bN_O69bmwIc5iBDrFTHTAUuDSaHtqf71T9N5Fo53QkhWgyXDVVL9MBgSd1WDse5QTYpHUDOzV6wwB5x8JfF6sEsrJmuntaxcJ40wRD6dao-JjxigTw_2WSvtLW2XIOBADozwAIlm6ow1xy3_mP4s9ZFdhpDmJYp_FKhFTaxPSdm1-IK-GInmBYWkWPVLURaoH',
  },
  {
    id: '5',
    brand: 'ROUND LAB',
    name: 'Birch Juice Moisturizing Sunscreen SPF50+',
    price: '$25.00',
    originalPrice: null,
    rating: '5.0',
    reviews: '12,940',
    badges: ['1+1'],
    badgeColors: ['bg-glow-secondary'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOLlFdZJp6PYEcFK6JwOXWDFaIb-TUN82gCk82Q9aoGoTt6h2YgeVQd_4Gx8tcLe37-B0EZ1313k5-PGk6zmCBY2rtb1gkoHdb7Hj5AZrQSCYOJyJoHxb7BubKxeomXKPAF-G5lN3yeqwhHgku0Kwujw5rhV6gsDwBpkaVasIoLWQANIwSUpt4rTDB7d0lhLNDLwlMym_U717hXjaWal1j9x9CxmNio_vbnIMwOO8i_rRMMeC0dI6H1Jd2YOYInS3DfwC4mpzjP2CK',
  },
];

const newArrivals = [
  {
    id: '6',
    name: 'Velvet Clay Mask',
    price: '$32.00',
    tag: 'Just Arrived',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABOjBdL1L1t7o4yITo6HwC4dl55X47zTuU5sXkAjO7Z3vVp_lSNRGdnDyBr_VcNU2y03ZjpYwitrVRl3m9JwclTQt7q_f42TLY91LaFtPdqjF5lM5lghWTz8qKNWcBRd3aAhPQ_UhGWdGZDL_nDTcfAKK8VYOdLXPCa2tVYFBXKcds4FxU0SGoyHWkqJ0kCWXQ9CNrac5VEe9G9j-mEo85zRj96fZxAqpzbwaH8cxeOSFLiv9nliJKhBkuBg_4OBOVAY4iCVdGfuF6',
    offsetTop: false,
  },
  {
    id: '7',
    name: 'Barrier Relief Balm',
    price: '$19.00',
    tag: 'New Brand',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuWtWo31uuIGNz7dC_wE2y_4JX8nfZdyOSA6ZYxcmS0qUrVuBKAdVjMMhBtrB344jSomX6oXnAPweSe2yTvU-I1EZIbkPsOD-Z_Oo960mw2OGHqZlnguwGj1QNB6OpUY_l9Q1lIG5yhYqXGMEaTMRWjWmJAN55KNTPt1yrtX4XiAZLCmqg08ye3WrcV-DVDi2M4G1WPIrAWf8GESQKqgtXAsI8RA9PEMq9WjnU9iV4RCgP8KZzXQYMkGQhdojEX6a-l7988nAa424P',
    offsetTop: true,
  },
  {
    id: '8',
    name: 'Golden Elixir Oil',
    price: '$85.00',
    tag: 'Exclusive',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6tu8OBwPUzZqoWFluAYPzHqeQiyME3ScB3Sod9nZYBAUOzxXJF9VdZbbcGLWW39G3kpA1kiYBZ7DTyAumw86HPGlKGzFjOyfQ4tjhpubjIwLat2aKEuA5vlNuekbcXfXyFALIqacS0RCkgds_xyEGNe98rMKJA-Rb3y_Udxr5VZHLaj3WgDET2wLFIx6kaBBDRcOpYAY_K6apoocJ0O45sjd_IlswK1H-W0FZuPIju2oPijXOdR5mLvub_WqXOKVmL17mtauiaUAf',
    offsetTop: false,
  },
];

const categories = [
  { icon: 'face', label: 'Skincare' },
  { icon: 'brush', label: 'Makeup' },
  { icon: 'content_cut', label: 'Hair' },
  { icon: 'spa', label: 'Body' },
  { icon: 'medication', label: 'Health' },
  { icon: 'air', label: 'Fragrance' },
  { icon: 'bolt', label: 'Men' },
  { icon: 'grid_view', label: 'All Brands' },
];

/* ─── Sections ─── */

function HeroSection() {
  return (
    <section className="mx-auto max-w-[1440px] px-8 py-6">
      <div className="relative flex h-[600px] items-center overflow-hidden rounded-3xl bg-glow-surface-container-low">
        <div className="absolute inset-0 z-0">
          <img
            className="h-full w-full object-cover opacity-90"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_rKKZO527HAIxJ_-QVCqvc_ZUJffF8MO7VaxY1JxNK9bKG3jegel7cShunHHCOuqnMeIGPsxTv_mFWZ_TdnGnBW2_JvjDeW4xHyDFgrlkVa2dhW2Kw6Aeghy34vMI0awFYVzIuh0RuWT_aDiTtioH-WQLcsalvaeYY8MiAFsh21KdvXtrQMXn9cuZaIdZWPG_MrqckqoX-daaqVqJEugUlksU8miX5w1jutdrED44iMRNsQL3OTD_bOD3RQjfMKcYSwLQIe7P7mDp"
            alt="Beauty products flatlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-glow-surface-container-low via-glow-surface-container-low/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-2xl pl-16">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-glow-primary">
            Summer Curation
          </span>
          <h1 className="mb-6 text-7xl font-extrabold leading-[0.95] tracking-tighter text-glow-on-surface">
            The Dewy
            <br />
            Manifesto
          </h1>
          <p className="mb-10 max-w-md text-lg text-glow-on-surface-variant">
            Discover our editor&apos;s handpicked selection of hydrating essentials for the ultimate glass-skin finish.
          </p>
          <div className="flex gap-4">
            <Link
              to="/products"
              className="active:scale-95 rounded-full bg-gradient-to-br from-glow-primary to-glow-primary-container px-10 py-4 font-bold text-white shadow-lg transition-all hover:opacity-90"
            >
              Explore Collection
            </Link>
            <button className="rounded-full border border-glow-outline-variant/15 bg-glow-surface-container-lowest px-10 py-4 font-bold text-glow-primary transition-all hover:bg-glow-surface-container-high">
              Watch the Film
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function CategoryNav() {
  return (
    <section className="mx-auto max-w-[1440px] px-8 py-12">
      <div className="hide-scrollbar flex justify-between gap-4 overflow-x-auto pb-4">
        {categories.map((cat) => (
          <div key={cat.label} className="group flex min-w-[100px] cursor-pointer flex-col items-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-glow-surface-container-high transition-colors group-hover:bg-glow-primary-fixed">
              <span className="material-symbols-outlined text-3xl text-glow-on-surface-variant group-hover:text-glow-primary">
                {cat.icon}
              </span>
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-glow-on-surface">{cat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function WeeklyBestSection() {
  return (
    <section className="bg-glow-surface-container-low py-16">
      <div className="mx-auto max-w-[1440px] px-8">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="mb-2 text-4xl font-bold tracking-tight text-glow-on-surface">Weekly Best</h2>
            <p className="text-glow-on-surface-variant">Real-time trending favorites from our community.</p>
          </div>
          <Link
            to="/products"
            className="group flex items-center gap-1 font-bold text-glow-primary"
          >
            View All Rankings
            <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {weeklyBestProducts.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="group overflow-hidden rounded-2xl bg-glow-surface-container-lowest transition-all hover:shadow-ambient"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={product.image}
                  alt={product.name}
                />
                {product.badges.length > 0 && (
                  <div className="absolute left-4 top-4 flex gap-2">
                    {product.badges.map((badge, i) => (
                      <span
                        key={badge}
                        className={`${product.badgeColors[i]} rounded px-2 py-1 text-[10px] font-bold text-white`}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                )}
                <button className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-glow-surface/90 opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                  <span className="material-symbols-outlined text-glow-primary">add_shopping_cart</span>
                </button>
              </div>
              <div className="p-5">
                <span className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-glow-on-surface-variant">
                  {product.brand}
                </span>
                <h3 className="mb-2 line-clamp-2 text-sm font-semibold text-glow-on-surface">{product.name}</h3>
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex items-center text-glow-primary-container">
                    <span
                      className="material-symbols-outlined text-xs"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span className="ml-1 text-xs font-bold text-glow-on-surface">{product.rating}</span>
                  </div>
                  <span className="text-xs text-glow-on-surface-variant/60">({product.reviews})</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg font-bold text-glow-on-surface">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-glow-on-surface-variant/40 line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewArrivalsSection() {
  return (
    <section className="mx-auto max-w-[1440px] px-8 py-24">
      <div className="grid grid-cols-12 items-center gap-8">
        <div className="col-span-12 pr-12 lg:col-span-4">
          <h2 className="mb-6 text-5xl font-extrabold uppercase leading-[0.9] tracking-tighter text-glow-on-surface">
            The Fresh
            <br />
            Drops
          </h2>
          <p className="mb-10 leading-relaxed text-glow-on-surface-variant">
            Introducing this month&apos;s newest additions to the Glow Curator library. Hand-tested and approved for the
            modern lifestyle.
          </p>
          <button className="group flex items-center gap-4 font-bold text-glow-primary">
            Browse New Arrivals
            <span className="h-[2px] w-12 bg-glow-primary transition-all group-hover:w-16" />
          </button>
        </div>
        <div className="col-span-12 lg:col-span-8">
          <div className="hide-scrollbar flex gap-6 overflow-x-auto">
            {newArrivals.map((item) => (
              <Link
                key={item.id}
                to={`/products/${item.id}`}
                className={`min-w-[320px] rounded-3xl bg-glow-surface-container-low p-4 ${item.offsetTop ? 'mt-12' : ''}`}
              >
                <div className="mb-6 aspect-square overflow-hidden rounded-2xl">
                  <img className="h-full w-full object-cover" src={item.image} alt={item.name} />
                </div>
                <div className="px-2">
                  <h4 className="mb-1 font-bold text-glow-on-surface">{item.name}</h4>
                  <p className="mb-4 text-sm text-glow-on-surface-variant">{item.price}</p>
                  <span className="rounded border border-glow-primary/20 px-2 py-1 text-[10px] font-bold uppercase text-glow-primary">
                    {item.tag}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BrandSpotlightSection() {
  return (
    <section className="mx-auto max-w-[1440px] px-8 py-16">
      <div className="relative flex flex-col items-center gap-16 overflow-hidden rounded-[2rem] bg-glow-on-surface p-16 lg:flex-row">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-glow-primary/10 to-transparent" />
        <div className="relative z-10 lg:w-1/2">
          <span className="mb-4 block font-bold uppercase tracking-[0.3em] text-glow-tertiary-container">
            Spotlight Artist
          </span>
          <h2 className="mb-8 text-6xl font-extrabold tracking-tighter text-glow-surface">HERA HOUSE</h2>
          <p className="mb-12 text-lg leading-relaxed text-glow-surface-variant">
            Step into the world of Seoul&apos;s luxury aesthetic. This month, we&apos;re celebrating Hera&apos;s
            commitment to sophisticated beauty and cutting-edge color science.
          </p>
          <div className="flex items-center gap-8">
            <button className="rounded-full bg-glow-surface px-10 py-4 font-bold text-glow-on-surface transition-colors hover:bg-glow-primary-fixed">
              Shop Hera Collection
            </button>
            <a href="#" className="border-b border-glow-surface/30 pb-1 font-semibold text-glow-surface">
              Discover the Story
            </a>
          </div>
        </div>
        <div className="relative lg:w-1/2">
          <div className="relative z-20 rotate-2 overflow-hidden rounded-2xl shadow-2xl transition-transform duration-700 hover:rotate-0">
            <img
              className="h-[500px] w-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBABHFrBT8xqK3-LDgOFaoRwhr8MzcBBkqHkiGpsuZV_2gq3u4KXFMHOx-l3pg15n2EcVI7vcv--oxEZmdYrbwvnEpz52y8MQebTaRTfQpTFAdKc3by6dwLZ2b8SUhOAUic__eI5m19J_SAdMHATFBkc0HWfB0FMkU5r_jmqe7v0tObVYPcijX_XUuQDBn7Wt8GNkadCgpUekqh1p8toiEO-KfOmhlUG0v8WtD6bHf6k1H9FQFQ2kbXlhwPuLsLFLiEkfSPYCyk9VSI"
              alt="Hera House beauty portrait"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 z-30 max-w-[240px] rounded-2xl bg-glow-primary-container p-8 shadow-xl">
            <p className="text-xl font-bold italic text-glow-on-primary-container">
              &ldquo;Beauty is the ultimate expression of confidence.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Page ─── */

export function ProductsPage() {
  return (
    <div className="font-jakarta">
      <HeroSection />
      <CategoryNav />
      <WeeklyBestSection />
      <NewArrivalsSection />
      <BrandSpotlightSection />
    </div>
  );
}
