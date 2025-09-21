import React, { useState } from "react";
import "./orders.scss";

const Orders = () => {
  const [selectedOrders, setSelectedOrders] = useState(new Set());
  const [currentPage, setCurrentPage] = useState(1);

  // Sample dummy data
  const orders = [
    {
      id: "#CM9801",
      user: {
        name: "Natali Craig",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      },
      project: "Landing Page",
      address: "Meadow Lane Oakland",
      date: "Just now",
      status: "In Progress",
    },
    {
      id: "#CM9802",
      user: {
        name: "Kate Morrison",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      },
      project: "CRM Admin pages",
      address: "Larry San Francisco",
      date: "A minute ago",
      status: "Complete",
    },
    {
      id: "#CM9803",
      user: {
        name: "Drew Cano",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      },
      project: "Client Project",
      address: "Bagwell Avenue Ocala",
      date: "1 hour ago",
      status: "Pending",
    },
    {
      id: "#CM9804",
      user: {
        name: "Orlando Diggs",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      },
      project: "Admin Dashboard",
      address: "Washburn Baton Rouge",
      date: "Yesterday",
      status: "Approved",
    },
    {
      id: "#CM9805",
      user: {
        name: "Andi Lane",
        avatar: "https://randomuser.me/api/portraits/women/3.jpg",
      },
      project: "App Landing Page",
      address: "Nest Lane Olivette",
      date: "Feb 2, 2023",
      status: "Rejected",
    },
  ];

  // Status color mapping
  const statusColors = {
    "In Progress": "#95a4fc",
    Complete: "#a1e3cb",
    Pending: "#b1e3ff",
    Approved: "#ffe999",
    Rejected: "#babdc9",
  };

  const handleSelectOrder = (orderId) => {
    const newSelected = new Set(selectedOrders);
    if (newSelected.has(orderId)) {
      newSelected.delete(orderId);
    } else {
      newSelected.add(orderId);
    }
    setSelectedOrders(newSelected);
  };

  const handleSelectAll = () => {
    if (selectedOrders.size === orders.length) {
      setSelectedOrders(new Set());
    } else {
      setSelectedOrders(new Set(orders.map((order) => order.id)));
    }
  };

  const getStatusBadgeClass = (status) => {
    const normalizedStatus = status.toLowerCase().replace(" ", "-");
    return `orders-table__status-badge orders-table__status-badge--${normalizedStatus}`;
  };

  // Calendar icon from the provided code
  const CalendarIcon = () => (
    <svg width="16" height="16" fill="none" className="calendar-icon">
      <rect x="2.2" y="3.2" width="11.8" height="9.6" rx="2" fill="#c9d6e5" />
      <rect x="4.2" y="5.2" width="7.8" height="5.6" rx="1" fill="#eee" />
    </svg>
  );

  const ChevronLeftIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15 18L9 12L15 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const ChevronRightIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9 18L15 12L9 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const MoreIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="1" fill="currentColor" />
      <circle cx="19" cy="12" r="1" fill="currentColor" />
      <circle cx="5" cy="12" r="1" fill="currentColor" />
    </svg>
  );

  return (
    <div className="orders-container">
      <div className="orders-header">
        <div className="orders-title">Order List</div>
        <div className="orders-search">
          <input placeholder="Search" />
        </div>
      </div>

      <table className="orders-table">
        <thead className="orders-table__header">
          <tr>
            <th>
              <input
                type="checkbox"
                className="orders-table__checkbox"
                checked={
                  selectedOrders.size === orders.length && orders.length > 0
                }
                onChange={handleSelectAll}
              />
            </th>
            <th className="order-id">Order ID</th>
            <th className="user">User</th>
            <th className="project">Project</th>
            <th className="address">Address</th>
            <th className="date">Date</th>
            <th className="status">Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="orders-table__body">
          {orders.map((order) => (
            <tr
              key={order.id}
              className={selectedOrders.has(order.id) ? "selected" : ""}
            >
              <td>
                <input
                  type="checkbox"
                  className="orders-table__checkbox"
                  checked={selectedOrders.has(order.id)}
                  onChange={() => handleSelectOrder(order.id)}
                />
              </td>
              <td className="orders-table__order-id">{order.id}</td>
              <td className="orders-table__user">
                <img
                  src={order.user.avatar}
                  alt={order.user.name}
                  className="orders-table__user-avatar"
                />
                <span className="orders-table__user-name">
                  {order.user.name}
                </span>
              </td>
              <td className="orders-table__project">{order.project}</td>
              <td className="orders-table__address">{order.address}</td>
              <td className="orders-table__date">
                <CalendarIcon />
                {order.date}
              </td>
              <td className="orders-table__status">
                <span className="orders-status">
                  <span
                    className="orders-status-dot"
                    style={{
                      background: statusColors[order.status] || "#babdc9",
                    }}
                  />
                  {order.status}
                </span>
              </td>
              <td className="orders-table__actions">
                <button type="button">
                  <MoreIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button className="pagination__button pagination__button--nav" disabled>
          <ChevronLeftIcon />
        </button>
        <button className="pagination__button pagination__button--active">
          1
        </button>
        <button className="pagination__button">2</button>
        <button className="pagination__button">3</button>
        <button className="pagination__button">4</button>
        <button className="pagination__button">5</button>
        <button className="pagination__button pagination__button--nav">
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
};

export default Orders;
