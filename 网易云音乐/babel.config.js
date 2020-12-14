module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins:[
    [
      'import',{
        librayName:'vant',
        librayDirectory:'es',
        style:true
      },'vant'
    ]
  ]
}
