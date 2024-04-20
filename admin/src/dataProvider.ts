import { DataProvider, fetchUtils } from "react-admin";
import { stringify } from "query-string";
import axios from "axios";

const apiUrl = "http://localhost:5000/api/admin";
const httpClient = fetchUtils.fetchJson;

export default {
  getList: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify(params.filter)
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    const response = await axios.get(url);

    return {
      data: response.data.data,
      total: response.data.total
    };
  },

  getOne: async (resource, params) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    const { data } = await axios.get(url);
    return { data };
  },

  getMany: async (resource, params) => {
    const query = {
      filter: JSON.stringify({ ids: params.ids })
    };
    const url = `${apiUrl}/${resource}/get-many?${stringify(query)}`;
    const { data } = await axios.get(url);
    return { data: data.data };
  },

  getManyReference: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id
      })
    };
    const url = `${apiUrl}/${resource}/many-references?${stringify(query)}`;

    const { data: responseData } = await axios.get(url);
    return {
      data: responseData.data,
      total: responseData.total
    };
  },

  create: async (resource, params) => {
    // const response = await axios.post(`${apiUrl}/${resource}`, params.data);
    const { json } = await httpClient(`${apiUrl}/${resource}`, {
      method: "POST",
      body: JSON.stringify(params.data)
    });
    return { data: json };
  },

  update: async (resource, params) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    const { data } = await axios.put(url, params.data);
    return { data };
  },

  updateMany: async (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids })
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    const { json } = await httpClient(url, {
      method: "PUT",
      body: JSON.stringify(params.data)
    });
    return { data: json };
  },

  delete: async (resource, params) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    const { data } = await axios.delete(url);
    return data;
  },

  deleteMany: async (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids })
    };
    const url = `${apiUrl}/${resource}/delete-many?${stringify(query)}`;
    const { data } = await axios.delete(url);
    return data;
  }
} as DataProvider;
