export function dashboardReducer(state = [], { type, payload }) {
  switch (type) {
    case 'updateDashboard':
      return payload;
    default:
      return state;
  }
}