
#Monitoring services
The monitoring services build in real time an archive of observations obtained from the analisys of the communication flows of the CELL application services.
The observations could be checked in real time (directly in memory) against attacks, anomalies or errors.
The observations, once processed in real time, are stored into a persistent archive for statistic analisys and reports generation.

### Config the port to be monitored
Admin can configure the tcp ports to be monitored by the monitoring services, by adding the following two lines:
* # the monitoring services will have to monitor the following ports
* PORTS_TO_BE_MONITORED = list(PEER_SERVICE_PORTS.items()) + list(CA_SERVICE_PORTS.items())
to the configuration file: /src/common/utils.py

### Config the monitoring level
Admin can add to the file /src/monitoring/config.py the following flags:
* MONITOR_DB=<file name or network path where to store the persistent archive>
* MONITOR_LEVEL=FULL | SIMPLE | NONE
