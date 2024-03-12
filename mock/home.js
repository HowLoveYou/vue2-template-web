module.exports = [
  {
    url: '/cadre/api/hr-cadre/cadre-level/page',
    method: 'post',
    proxy: true, // 是否使用mock代理
    response: {
      code: 200,
      data: {
        list: [
          {
            approvalContent: null,
            approvalId: 'ssss',
            approverNow: '',
            batchId: null,
            createTime: '2022-06-13 15:04:47',
            headTitle: 'xxxx',
            name: 'xxx',
            nodeNow: '',
            processId: 'gbrm20220613150447',
            processType: '晋升',
            processTypeCode: '2',
            status: '已完成',
            statusCode: '2',
          },
        ],
      },
    },
  },
];
