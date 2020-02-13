import moment from 'moment'
export function formateDate () {
  return moment().format('YYYY-MM-DD HH:mm:ss');
}

export function pagination (data, callback) {
  return {
    current: data.result.page,
    pageSize: data.result.page_size,
    total: data.result.total,
    showTotal: () => {
      return `共${data.result.total}条`
    },
    showQuickJumper: true,
    onChange: (current) => {
      callback(current)
    }
  }
}