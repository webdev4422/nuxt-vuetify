<template>
  <v-app dark>
    <!-- <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->

    <v-app-bar :clipped-left="clipped" fixed app>
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" /> -->

      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <!-- close icon -->
        <v-list-item @click.stop="rightDrawer = !rightDrawer">
          <v-list-item-action>
            <v-icon dark class="test">
              mdi-close
            </v-icon>
          </v-list-item-action>
          <v-list-item-title></v-list-item-title>
        </v-list-item>

        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>

        <!-- <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item> -->

        <v-list-item to="/contact">
          <v-list-item-action>
            <v-icon dark>
              mdi-phone
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>contact</v-list-item-title>
        </v-list-item>

        <v-list-item to="/info">
          <v-list-item-action>
            <v-icon dark>
              mdi-information
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>info</v-list-item-title>
        </v-list-item>

        <v-list-item to="/price">
          <v-list-item-action>
            <v-icon dark>
              mdi-cash
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>price</v-list-item-title>
        </v-list-item>

        <v-list-item to="/location">
          <v-list-item-action>
            <v-icon dark>
              mdi-map-marker
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>location</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>
<style>
.test {
  /* background: red; */
  padding: 0 0 0 12rem;
}
img {
  max-width: 250px;
}
</style>
