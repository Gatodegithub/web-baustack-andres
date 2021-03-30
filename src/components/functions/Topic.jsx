import React from 'react'
import { Redirect, useParams } from 'react-router-dom';
import TopicLayout from '../pages/TopicLayout';

export default function Topic() {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { topicId } = useParams();

  const paths = ['crm', 'gestiondecausas', 'contratosporvencer', 'controldepolizas', 'planificaciondeeventos', 'gestiondeproyectos'];

  return paths.includes(topicId) ? <TopicLayout topicId={topicId}/> : <Redirect to="/" />
}
