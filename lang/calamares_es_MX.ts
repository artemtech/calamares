<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS language="es_MX" version="2.1">
  <context>
    <name>AutoMountManagementJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/AutoMountManagementJob.cpp" line="22"/>
      <source>Manage auto-mount settings</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>BootInfoWidget</name>
    <message>
      <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="62"/>
      <source>The &lt;strong&gt;boot environment&lt;/strong&gt; of this system.&lt;br&gt;&lt;br&gt;Older x86 systems only support &lt;strong&gt;BIOS&lt;/strong&gt;.&lt;br&gt;Modern systems usually use &lt;strong&gt;EFI&lt;/strong&gt;, but may also show up as BIOS if started in compatibility mode.</source>
      <translation>El &lt;strong&gt;entorno de arranque &lt;/strong&gt;de este sistema. &lt;br&gt;&lt;br&gt;Sistemas antiguos x86 solo admiten &lt;strong&gt;BIOS&lt;/strong&gt;. &lt;br&gt;Sistemas modernos usualmente usan &lt;strong&gt;EFI&lt;/strong&gt;, pero podrían aparecer como BIOS si inició en modo de compatibilidad.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="72"/>
      <source>This system was started with an &lt;strong&gt;EFI&lt;/strong&gt; boot environment.&lt;br&gt;&lt;br&gt;To configure startup from an EFI environment, this installer must deploy a boot loader application, like &lt;strong&gt;GRUB&lt;/strong&gt; or &lt;strong&gt;systemd-boot&lt;/strong&gt; on an &lt;strong&gt;EFI System Partition&lt;/strong&gt;. This is automatic, unless you choose manual partitioning, in which case you must choose it or create it on your own.</source>
      <translation>Este sistema fue iniciado con un entorno de arranque &lt;strong&gt;EFI. &lt;/strong&gt;&lt;br&gt;&lt;br&gt;Para configurar el arranque desde un entorno EFI, este instalador debe hacer uso de un cargador de arranque, como &lt;strong&gt;GRUB&lt;/strong&gt;, &lt;strong&gt;system-boot &lt;/strong&gt; o una &lt;strong&gt;Partición de sistema EFI&lt;/strong&gt;. Esto es automático, a menos que escoja el particionado manual, en tal caso debe escogerla o crearla por su cuenta.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="84"/>
      <source>This system was started with a &lt;strong&gt;BIOS&lt;/strong&gt; boot environment.&lt;br&gt;&lt;br&gt;To configure startup from a BIOS environment, this installer must install a boot loader, like &lt;strong&gt;GRUB&lt;/strong&gt;, either at the beginning of a partition or on the &lt;strong&gt;Master Boot Record&lt;/strong&gt; near the beginning of the partition table (preferred). This is automatic, unless you choose manual partitioning, in which case you must set it up on your own.</source>
      <translation>Este sistema fue iniciado con un entorno de arranque &lt;strong&gt;BIOS. &lt;/strong&gt;&lt;br&gt;&lt;br&gt;Para configurar el arranque desde un entorno BIOS, este instalador debe instalar un gestor de arranque como &lt;strong&gt;GRUB&lt;/strong&gt;, ya sea al inicio de la partición o en el &lt;strong&gt; Master Boot Record&lt;/strong&gt; cerca del inicio de la tabla de particiones (preferido). Esto es automático, a menos que escoja el particionado manual, en este caso debe configurarlo por su cuenta.</translation>
    </message>
  </context>
  <context>
    <name>BootLoaderModel</name>
    <message>
      <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="59"/>
      <source>Master Boot Record of %1</source>
      <translation>Master Boot Record de %1</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="92"/>
      <source>Boot Partition</source>
      <translation>Partición de arranque</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="99"/>
      <source>System Partition</source>
      <translation>Partición del Sistema</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="129"/>
      <source>Do not install a boot loader</source>
      <translation> No instalar el gestor de arranque</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="147"/>
      <source>%1 (%2)</source>
      <translation>%1 (%2)</translation>
    </message>
  </context>
  <context>
    <name>Calamares::BlankViewStep</name>
    <message>
      <location filename="../src/libcalamaresui/viewpages/BlankViewStep.cpp" line="61"/>
      <source>Blank Page</source>
      <translation>Página en blanco</translation>
    </message>
  </context>
  <context>
    <name>Calamares::DebugWindow</name>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="18"/>
      <source>Form</source>
      <translation>Formulario</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="28"/>
      <source>GlobalStorage</source>
      <translation>Almacenamiento Global</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="38"/>
      <source>JobQueue</source>
      <translation>Cola de trabajo</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="48"/>
      <source>Modules</source>
      <translation>Módulos</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="61"/>
      <source>Type:</source>
      <translation>Tipo:</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="68"/>
      <location filename="../src/calamares/DebugWindow.ui" line="82"/>
      <source>none</source>
      <translation>ninguno</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="75"/>
      <source>Interface:</source>
      <translation>Interfaz:</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="102"/>
      <source>Crashes Calamares, so that Dr. Konqui can look at it.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="115"/>
      <source>Reloads the stylesheet from the branding directory.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="141"/>
      <source>Uploads the session log to the configured pastebin.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="144"/>
      <source>Send Session Log</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="118"/>
      <source>Reload Stylesheet</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="128"/>
      <source>Displays the tree of widget names in the log (for stylesheet debugging).</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="131"/>
      <source>Widget Tree</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.cpp" line="221"/>
      <source>Debug information</source>
      <translation>Información de depuración</translation>
    </message>
  </context>
  <context>
    <name>Calamares::ExecutionViewStep</name>
    <message>
      <location filename="../src/libcalamaresui/viewpages/ExecutionViewStep.cpp" line="88"/>
      <source>Set up</source>
      <translation>Preparar</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/viewpages/ExecutionViewStep.cpp" line="88"/>
      <source>Install</source>
      <translation>Instalar</translation>
    </message>
  </context>
  <context>
    <name>Calamares::FailJob</name>
    <message>
      <location filename="../src/libcalamares/JobExample.cpp" line="29"/>
      <source>Job failed (%1)</source>
      <translation>Trabajo fallido (%1)</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/JobExample.cpp" line="30"/>
      <source>Programmed job failure was explicitly requested.</source>
      <translation>Falla del trabajo programado fue solicitado explícitamente.</translation>
    </message>
  </context>
  <context>
    <name>Calamares::JobThread</name>
    <message>
      <location filename="../src/libcalamares/JobQueue.cpp" line="198"/>
      <source>Done</source>
      <translation>Hecho</translation>
    </message>
  </context>
  <context>
    <name>Calamares::NamedJob</name>
    <message>
      <location filename="../src/libcalamares/JobExample.cpp" line="17"/>
      <source>Example job (%1)</source>
      <translation>Trabajo de ejemplo. (%1)</translation>
    </message>
  </context>
  <context>
    <name>Calamares::ProcessJob</name>
    <message>
      <location filename="../src/libcalamares/ProcessJob.cpp" line="43"/>
      <source>Run command '%1' in target system.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/libcalamares/ProcessJob.cpp" line="43"/>
      <source> Run command '%1'.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/libcalamares/ProcessJob.cpp" line="50"/>
      <source>Running command %1 %2</source>
      <translation> Ejecutando comando %1 %2</translation>
    </message>
  </context>
  <context>
    <name>Calamares::PythonJob</name>
    <message>
      <location filename="../src/libcalamares/PythonJob.cpp" line="194"/>
      <source>Running %1 operation.</source>
      <translation>Ejecutando operación %1.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/PythonJob.cpp" line="223"/>
      <source>Bad working directory path</source>
      <translation>Ruta a la carpeta de trabajo errónea</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/PythonJob.cpp" line="224"/>
      <source>Working directory %1 for python job %2 is not readable.</source>
      <translation>La carpeta de trabajo %1 para la tarea de python %2 no es accesible.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/PythonJob.cpp" line="230"/>
      <source>Bad main script file</source>
      <translation>Script principal erróneo</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/PythonJob.cpp" line="231"/>
      <source>Main script file %1 for python job %2 is not readable.</source>
      <translation>El script principal %1 del proceso python %2 no es accesible.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/PythonJob.cpp" line="304"/>
      <source>Boost.Python error in job "%1".</source>
      <translation>Error Boost.Python en el proceso "%1".</translation>
    </message>
  </context>
  <context>
    <name>Calamares::QmlViewStep</name>
    <message>
      <location filename="../src/libcalamaresui/viewpages/QmlViewStep.cpp" line="67"/>
      <source>Loading ...</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/libcalamaresui/viewpages/QmlViewStep.cpp" line="88"/>
      <source>QML Step &lt;i&gt;%1&lt;/i&gt;.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/libcalamaresui/viewpages/QmlViewStep.cpp" line="268"/>
      <source>Loading failed.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>Calamares::RequirementsChecker</name>
    <message>
      <location filename="../src/libcalamares/modulesystem/RequirementsChecker.cpp" line="94"/>
      <source>Requirements checking for module &lt;i&gt;%1&lt;/i&gt; is complete.</source>
      <translation type="unfinished"/>
    </message>
    <message numerus="yes">
      <location filename="../src/libcalamares/modulesystem/RequirementsChecker.cpp" line="115"/>
      <source>Waiting for %n module(s).</source>
      <translation type="unfinished">
        <numerusform/>
        <numerusform/>
      </translation>
    </message>
    <message numerus="yes">
      <location filename="../src/libcalamares/modulesystem/RequirementsChecker.cpp" line="116"/>
      <source>(%n second(s))</source>
      <translation type="unfinished">
        <numerusform/>
        <numerusform/>
      </translation>
    </message>
    <message>
      <location filename="../src/libcalamares/modulesystem/RequirementsChecker.cpp" line="121"/>
      <source>System-requirements checking is complete.</source>
      <translation>Chequeo de requerimientos del sistema completado.</translation>
    </message>
  </context>
  <context>
    <name>Calamares::ViewManager</name>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="155"/>
      <source>Setup Failed</source>
      <translation>Fallo en la configuración.</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="155"/>
      <source>Installation Failed</source>
      <translation>Instalación Fallida</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="156"/>
      <source>Would you like to paste the install log to the web?</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="172"/>
      <source>Error</source>
      <translation>Error</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="179"/>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="519"/>
      <source>&amp;Yes</source>
      <translation>&amp;Si</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="180"/>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="520"/>
      <source>&amp;No</source>
      <translation>&amp;No</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="186"/>
      <source>&amp;Close</source>
      <translation>&amp;Cerrar</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/utils/Paste.cpp" line="170"/>
      <source>Install Log Paste URL</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/libcalamaresui/utils/Paste.cpp" line="152"/>
      <source>The upload was unsuccessful. No web-paste was done.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/libcalamaresui/utils/Paste.cpp" line="164"/>
      <source>Install log posted to

%1

Link copied to clipboard</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="206"/>
      <source>Calamares Initialization Failed</source>
      <translation>La inicialización de Calamares ha fallado</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="207"/>
      <source>%1 can not be installed. Calamares was unable to load all of the configured modules. This is a problem with the way Calamares is being used by the distribution.</source>
      <translation>%1 no pudo ser instalado. Calamares no pudo cargar todos los módulos configurados. Este es un problema con la forma en que Calamares esta siendo usada por la distribución.</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="213"/>
      <source>&lt;br/&gt;The following modules could not be loaded:</source>
      <translation>&lt;br/&gt;Los siguientes módulos no pudieron ser cargados:</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="327"/>
      <source>Continue with setup?</source>
      <translation>¿Continuar con la instalación?</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="327"/>
      <source>Continue with installation?</source>
      <translation>¿Continuar con la instalación?</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="329"/>
      <source>The %1 setup program is about to make changes to your disk in order to set up %2.&lt;br/&gt;&lt;strong&gt;You will not be able to undo these changes.&lt;/strong&gt;</source>
      <translation>El  %1 programa de instalación esta a punto de realizar cambios a su disco con el fin de establecer %2.&lt;br/&gt;&lt;strong&gt;Usted no podrá deshacer estos cambios.&lt;/strong&gt;</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="332"/>
      <source>The %1 installer is about to make changes to your disk in order to install %2.&lt;br/&gt;&lt;strong&gt;You will not be able to undo these changes.&lt;/strong&gt;</source>
      <translation> El instalador %1 va a realizar cambios en su disco para instalar %2.&lt;br/&gt;&lt;strong&gt;No podrá deshacer estos cambios.&lt;/strong&gt;</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="335"/>
      <source>&amp;Set up now</source>
      <translation>&amp;Configurar ahora</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="335"/>
      <source>&amp;Install now</source>
      <translation>&amp;Instalar ahora</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="343"/>
      <source>Go &amp;back</source>
      <translation>&amp;Regresar</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="393"/>
      <source>&amp;Set up</source>
      <translation>&amp;Configurar</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="393"/>
      <source>&amp;Install</source>
      <translation>&amp;Instalar</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="395"/>
      <source>Setup is complete. Close the setup program.</source>
      <translation>Configuración completa. Cierre el programa de instalación.</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="396"/>
      <source>The installation is complete. Close the installer.</source>
      <translation>Instalación completa. Cierre el instalador.</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="398"/>
      <source>Cancel setup without changing the system.</source>
      <translation>Cancelar la configuración sin cambiar el sistema.</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="399"/>
      <source>Cancel installation without changing the system.</source>
      <translation>Cancelar instalación sin cambiar el sistema.</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="409"/>
      <source>&amp;Next</source>
      <translation>&amp;Siguiente</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="414"/>
      <source>&amp;Back</source>
      <translation>&amp;Atrás </translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="420"/>
      <source>&amp;Done</source>
      <translation>&amp;Hecho</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="439"/>
      <source>&amp;Cancel</source>
      <translation>&amp;Cancelar</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="512"/>
      <source>Cancel setup?</source>
      <translation>¿Cancelar la configuración?</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="512"/>
      <source>Cancel installation?</source>
      <translation>¿Cancelar la instalación?</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="513"/>
      <source>Do you really want to cancel the current setup process?
The setup program will quit and all changes will be lost.</source>
      <translation>¿Realmente desea cancelar el actual proceso de configuración?
El programa de instalación se cerrará y todos los cambios se perderán.</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="515"/>
      <source>Do you really want to cancel the current install process?
The installer will quit and all changes will be lost.</source>
      <translation>¿Realmente desea cancelar el proceso de instalación actual?
El instalador terminará y se perderán todos los cambios.</translation>
    </message>
  </context>
  <context>
    <name>CalamaresPython::Helper</name>
    <message>
      <location filename="../src/libcalamares/PythonHelper.cpp" line="294"/>
      <source>Unknown exception type</source>
      <translation>Tipo de excepción desconocida</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/PythonHelper.cpp" line="312"/>
      <source>unparseable Python error</source>
      <translation>error Python no analizable </translation>
    </message>
    <message>
      <location filename="../src/libcalamares/PythonHelper.cpp" line="356"/>
      <source>unparseable Python traceback</source>
      <translation>rastreo de Python no analizable</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/PythonHelper.cpp" line="363"/>
      <source>Unfetchable Python error.</source>
      <translation>Error de Python inalcanzable.</translation>
    </message>
  </context>
  <context>
    <name>CalamaresWindow</name>
    <message>
      <location filename="../src/calamares/CalamaresWindow.cpp" line="368"/>
      <source>%1 Setup Program</source>
      <translation>%1 Programa de instalación</translation>
    </message>
    <message>
      <location filename="../src/calamares/CalamaresWindow.cpp" line="369"/>
      <source>%1 Installer</source>
      <translation>%1 Instalador</translation>
    </message>
  </context>
  <context>
    <name>ChangeFilesystemLabelJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/ChangeFilesystemLabelJob.cpp" line="32"/>
      <source>Set filesystem label on %1.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ChangeFilesystemLabelJob.cpp" line="39"/>
      <source>Set filesystem label &lt;strong&gt;%1&lt;/strong&gt; to partition &lt;strong&gt;%2&lt;/strong&gt;.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ChangeFilesystemLabelJob.cpp" line="70"/>
      <source>The installer failed to update partition table on disk '%1'.</source>
      <translation>El instalador falló al actualizar la tabla de partición en el disco '%1'.</translation>
    </message>
  </context>
  <context>
    <name>CheckerContainer</name>
    <message>
      <location filename="../src/modules/welcome/checker/CheckerContainer.cpp" line="38"/>
      <source>Gathering system information...</source>
      <translation>Obteniendo información del sistema...</translation>
    </message>
  </context>
  <context>
    <name>ChoicePage</name>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.ui" line="18"/>
      <source>Form</source>
      <translation>Formulario</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="121"/>
      <source>Select storage de&amp;vice:</source>
      <translation>Seleccionar dispositivo de almacenamiento:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="122"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="987"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1033"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1124"/>
      <source>Current:</source>
      <translation>Actual:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="123"/>
      <source>After:</source>
      <translation>Después:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="332"/>
      <source>&lt;strong&gt;Manual partitioning&lt;/strong&gt;&lt;br/&gt;You can create or resize partitions yourself.</source>
      <translation>&lt;strong&gt;Particionado manual &lt;/strong&gt;&lt;br/&gt; Puede crear o cambiar el tamaño de las particiones usted mismo.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="852"/>
      <source>Reuse %1 as home partition for %2.</source>
      <translation>Reuse %1 como partición home para %2.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="988"/>
      <source>&lt;strong&gt;Select a partition to shrink, then drag the bottom bar to resize&lt;/strong&gt;</source>
      <translation> &lt;strong&gt;Seleccione una partición para reducir el tamaño, a continuación, arrastre la barra inferior para redimencinar&lt;/strong&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1005"/>
      <source>%1 will be shrunk to %2MiB and a new %3MiB partition will be created for %4.</source>
      <translation>%1 será reducido a %2MiB y una nueva %3MiB partición se creará para %4.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1062"/>
      <source>Boot loader location:</source>
      <translation>Ubicación del cargador de arranque:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1115"/>
      <source>&lt;strong&gt;Select a partition to install on&lt;/strong&gt;</source>
      <translation> &lt;strong&gt;Seleccione una partición para instalar&lt;/strong&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1174"/>
      <source>An EFI system partition cannot be found anywhere on this system. Please go back and use manual partitioning to set up %1.</source>
      <translation>No se puede encontrar en el sistema una partición EFI. Por favor vuelva atrás y use el particionamiento manual para configurar %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1182"/>
      <source>The EFI system partition at %1 will be used for starting %2.</source>
      <translation>La partición EFI en %1 será usada para iniciar %2.
</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1190"/>
      <source>EFI system partition:</source>
      <translation>Partición de sistema EFI:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1325"/>
      <source>This storage device does not seem to have an operating system on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
      <translation>Este dispositivo de almacenamiento parece no tener un sistema operativo en el. ¿que le gustaría hacer?&lt;br/&gt; Usted podrá revisar y confirmar sus elecciones antes que cualquier cambio se realice al dispositivo de almacenamiento.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1330"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1367"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1389"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1414"/>
      <source>&lt;strong&gt;Erase disk&lt;/strong&gt;&lt;br/&gt;This will &lt;font color="red"&gt;delete&lt;/font&gt; all data currently present on the selected storage device.</source>
      <translation>&lt;strong&gt;Borrar disco&lt;/strong&gt; &lt;br/&gt;Esto &lt;font color="red"&gt;borrará&lt;/font&gt; todos los datos presentes actualmente en el dispositivo de almacenamiento seleccionado.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1334"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1363"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1385"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1410"/>
      <source>&lt;strong&gt;Install alongside&lt;/strong&gt;&lt;br/&gt;The installer will shrink a partition to make room for %1.</source>
      <translation>&lt;strong&gt;Instalar junto a&lt;/strong&gt; &lt;br/&gt;El instalador reducirá una partición con el fin de hacer espacio para %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1338"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1372"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1393"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1418"/>
      <source>&lt;strong&gt;Replace a partition&lt;/strong&gt;&lt;br/&gt;Replaces a partition with %1.</source>
      <translation>&lt;strong&gt;Reemplazar una partición&lt;/strong&gt; &lt;br/&gt;Reemplaza una partición con %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1357"/>
      <source>This storage device has %1 on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
      <translation>Este dispositivo de almacenamiento tiene %1 en el. ¿Que le gustaría hacer? &lt;br/&gt;Usted podrá revisar y confirmar sus elecciones antes de que cualquier cambio se realice al dispositivo de almacenamiento.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1380"/>
      <source>This storage device already has an operating system on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
      <translation>Este dispositivo de almacenamiento ya tiene un sistema operativo en el. ¿Que le gustaría hacer?&lt;br/&gt; Usted podrá revisar y confirmar sus elecciones antes que cualquier cambio se realice al dispositivo de almacenamiento.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1405"/>
      <source>This storage device has multiple operating systems on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
      <translation>Este dispositivo de almacenamiento tiene múltiples sistemas operativos en el. ¿Que le gustaria hacer?&lt;br/&gt; Usted podrá revisar y confirmar sus elecciones antes que cualquier cambio se realice al dispositivo de almacenamiento.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1477"/>
      <source>This storage device already has an operating system on it, but the partition table &lt;strong&gt;%1&lt;/strong&gt; is different from the needed &lt;strong&gt;%2&lt;/strong&gt;.&lt;br/&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1500"/>
      <source>This storage device has one of its partitions &lt;strong&gt;mounted&lt;/strong&gt;.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1505"/>
      <source>This storage device is a part of an &lt;strong&gt;inactive RAID&lt;/strong&gt; device.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1632"/>
      <source>No Swap</source>
      <translation>Sin Swap</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1640"/>
      <source>Reuse Swap</source>
      <translation>Reutilizar Swap</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1643"/>
      <source>Swap (no Hibernate)</source>
      <translation>Swap (sin hibernación)</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1646"/>
      <source>Swap (with Hibernate)</source>
      <translation>Swap (con hibernación)</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1649"/>
      <source>Swap to file</source>
      <translation>Swap a archivo</translation>
    </message>
  </context>
  <context>
    <name>ClearMountsJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="42"/>
      <source>Clear mounts for partitioning operations on %1</source>
      <translation>Borrar puntos de montaje para operaciones de particionamiento en %1</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="49"/>
      <source>Clearing mounts for partitioning operations on %1.</source>
      <translation>Borrando puntos de montaje para operaciones de particionamiento en %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="224"/>
      <source>Cleared all mounts for %1</source>
      <translation>Puntos de montaje despejados para %1</translation>
    </message>
  </context>
  <context>
    <name>ClearTempMountsJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="32"/>
      <source>Clear all temporary mounts.</source>
      <translation>Despejar todos los puntos de montaje temporales.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="39"/>
      <source>Clearing all temporary mounts.</source>
      <translation>Despejando todos los puntos de montaje temporales.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="52"/>
      <source>Cannot get list of temporary mounts.</source>
      <translation>No se puede obtener la lista de puntos de montaje temporales.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="97"/>
      <source>Cleared all temporary mounts.</source>
      <translation>Todos los puntos de montaje temporales despejados.</translation>
    </message>
  </context>
  <context>
    <name>CommandList</name>
    <message>
      <location filename="../src/libcalamares/utils/CommandList.cpp" line="142"/>
      <location filename="../src/libcalamares/utils/CommandList.cpp" line="155"/>
      <source>Could not run command.</source>
      <translation>No puede ejecutarse el comando.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/CommandList.cpp" line="143"/>
      <source>The command runs in the host environment and needs to know the root path, but no rootMountPoint is defined.</source>
      <translation>Este comando se ejecuta en el entorno host y necesita saber la ruta root, pero no hay rootMountPoint definido.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/CommandList.cpp" line="156"/>
      <source>The command needs to know the user's name, but no username is defined.</source>
      <translation>Este comando necesita saber el nombre de usuario, pero no hay nombre de usuario definido.</translation>
    </message>
  </context>
  <context>
    <name>Config</name>
    <message>
      <location filename="../src/modules/keyboard/Config.cpp" line="330"/>
      <source>Set keyboard model to %1.&lt;br/&gt;</source>
      <translation>Ajustar el modelo de teclado a %1.&lt;br/&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboard/Config.cpp" line="337"/>
      <source>Set keyboard layout to %1/%2.</source>
      <translation>Ajustar teclado a %1/%2.</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/Config.cpp" line="342"/>
      <source>Set timezone to %1/%2.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/locale/Config.cpp" line="380"/>
      <source>The system language will be set to %1.</source>
      <translation>El lenguaje del sistema será establecido a %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/Config.cpp" line="387"/>
      <source>The numbers and dates locale will be set to %1.</source>
      <translation>Los números y datos locales serán establecidos a %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/Config.cpp" line="53"/>
      <source>Network Installation. (Disabled: Incorrect configuration)</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/netinstall/Config.cpp" line="55"/>
      <source>Network Installation. (Disabled: Received invalid groups data)</source>
      <translation>Instalación de Red. (Deshabilitada: Grupos de datos invalidos recibidos)</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/Config.cpp" line="57"/>
      <source>Network Installation. (Disabled: Internal error)</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/netinstall/Config.cpp" line="61"/>
      <source>Network Installation. (Disabled: No package list)</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/netinstall/Config.cpp" line="77"/>
      <source>Package selection</source>
      <translation>Selección de paquete</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/Config.cpp" line="59"/>
      <source>Network Installation. (Disabled: Unable to fetch package lists, check your network connection)</source>
      <translation>Instalación de Red. (Deshabilitada: No se puede acceder a la lista de paquetes, verifique su conección de red)</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/Config.cpp" line="50"/>
      <source>This computer does not satisfy the minimum requirements for setting up %1.&lt;br/&gt;Setup cannot continue. &lt;a href="#details"&gt;Details...&lt;/a&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcome/Config.cpp" line="54"/>
      <source>This computer does not satisfy the minimum requirements for installing %1.&lt;br/&gt;Installation cannot continue. &lt;a href="#details"&gt;Details...&lt;/a&gt;</source>
      <translation> Este equipo no cumple los requisitos mínimos para la instalación. %1.&lt;br/&gt;La instalación no puede continuar. &lt;a href="#details"&gt;Detalles...&lt;/a&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/Config.cpp" line="61"/>
      <source>This computer does not satisfy some of the recommended requirements for setting up %1.&lt;br/&gt;Setup can continue, but some features might be disabled.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcome/Config.cpp" line="65"/>
      <source>This computer does not satisfy some of the recommended requirements for installing %1.&lt;br/&gt;Installation can continue, but some features might be disabled.</source>
      <translation> Este equipo no cumple alguno de los requisitos recomendados para la instalación %1.&lt;br/&gt;La instalación puede continuar, pero algunas funcionalidades podrían ser deshabilitadas.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/Config.cpp" line="75"/>
      <source>This program will ask you some questions and set up %2 on your computer.</source>
      <translation> El programa le hará algunas preguntas y configurará %2 en su ordenador.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/Config.cpp" line="244"/>
      <source>&lt;h1&gt;Welcome to the Calamares setup program for %1&lt;/h1&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcome/Config.cpp" line="245"/>
      <source>&lt;h1&gt;Welcome to %1 setup&lt;/h1&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcome/Config.cpp" line="250"/>
      <source>&lt;h1&gt;Welcome to the Calamares installer for %1&lt;/h1&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcome/Config.cpp" line="251"/>
      <source>&lt;h1&gt;Welcome to the %1 installer&lt;/h1&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/Config.cpp" line="217"/>
      <source>Your username is too long.</source>
      <translation>Tu nombre de usuario es demasiado largo.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/Config.cpp" line="223"/>
      <source>'%1' is not allowed as username.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/Config.cpp" line="230"/>
      <source>Your username must start with a lowercase letter or underscore.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/Config.cpp" line="234"/>
      <source>Only lowercase letters, numbers, underscore and hyphen are allowed.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/Config.cpp" line="279"/>
      <source>Your hostname is too short.</source>
      <translation>El nombre de tu equipo es demasiado corto.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/Config.cpp" line="283"/>
      <source>Your hostname is too long.</source>
      <translation>El nombre de tu equipo es demasiado largo.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/Config.cpp" line="289"/>
      <source>'%1' is not allowed as hostname.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/Config.cpp" line="295"/>
      <source>Only letters, numbers, underscore and hyphen are allowed.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/Config.cpp" line="534"/>
      <source>Your passwords do not match!</source>
      <translation>Las contraseñas no coinciden!</translation>
    </message>
    <message>
      <location filename="../src/modules/users/Config.cpp" line="548"/>
      <source>OK!</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/finished/Config.cpp" line="145"/>
      <source>Setup Failed</source>
      <translation>Fallo en la configuración.</translation>
    </message>
    <message>
      <location filename="../src/modules/finished/Config.cpp" line="145"/>
      <source>Installation Failed</source>
      <translation>Instalación Fallida</translation>
    </message>
    <message>
      <location filename="../src/modules/finished/Config.cpp" line="147"/>
      <source>The setup of %1 did not complete successfully.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/finished/Config.cpp" line="148"/>
      <source>The installation of %1 did not complete successfully.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/finished/Config.cpp" line="152"/>
      <source>Setup Complete</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/finished/Config.cpp" line="153"/>
      <source>Installation Complete</source>
      <translation>Instalación Completa</translation>
    </message>
    <message>
      <location filename="../src/modules/finished/Config.cpp" line="154"/>
      <source>The setup of %1 is complete.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/finished/Config.cpp" line="155"/>
      <source>The installation of %1 is complete.</source>
      <translation>La instalación de %1 está completa.</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooser/Config.cpp" line="85"/>
      <source>Package Selection</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/packagechooser/Config.cpp" line="87"/>
      <source>Please pick a product from the list. The selected product will be installed.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>ContextualProcessJob</name>
    <message>
      <location filename="../src/modules/contextualprocess/ContextualProcessJob.cpp" line="119"/>
      <source>Contextual Processes Job</source>
      <translation>Tareas de procesos contextuales</translation>
    </message>
  </context>
  <context>
    <name>CreatePartitionDialog</name>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="18"/>
      <source>Create a Partition</source>
      <translation>Crear una Partición</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="42"/>
      <source>Si&amp;ze:</source>
      <translation>Ta&amp;maño:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="52"/>
      <source> MiB</source>
      <translation> MiB</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="59"/>
      <source>Partition &amp;Type:</source>
      <translation>&amp;Tipo de partición:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="71"/>
      <source>&amp;Primary</source>
      <translation>&amp;Primaria</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="81"/>
      <source>E&amp;xtended</source>
      <translation>E&amp;xtendida</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="123"/>
      <source>Fi&amp;le System:</source>
      <translation>Sis&amp;tema de Archivos:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="155"/>
      <source>LVM LV name</source>
      <translation>Nombre del LVM LV.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="165"/>
      <source>&amp;Mount Point:</source>
      <translation>Punto de &amp;Montaje:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="192"/>
      <source>Flags:</source>
      <translation>Indicadores:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="231"/>
      <source>Label for the filesystem</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="241"/>
      <source>FS Label:</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="65"/>
      <source>En&amp;crypt</source>
      <translation>En&amp;criptar</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="191"/>
      <source>Logical</source>
      <translation>Lógica</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="196"/>
      <source>Primary</source>
      <translation>Primaria</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="215"/>
      <source>GPT</source>
      <translation>GPT</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="301"/>
      <source>Mountpoint already in use. Please select another one.</source>
      <translation>Punto de montaje ya esta en uso. Por favor seleccione otro.</translation>
    </message>
  </context>
  <context>
    <name>CreatePartitionJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="113"/>
      <source>Create new %1MiB partition on %3 (%2) with entries %4.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="121"/>
      <source>Create new %1MiB partition on %3 (%2).</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="128"/>
      <source>Create new %2MiB partition on %4 (%3) with file system %1.</source>
      <translation>Crear nueva %2MiB partición en %4 (%3) con el sistema de archivos %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="145"/>
      <source>Create new &lt;strong&gt;%1MiB&lt;/strong&gt; partition on &lt;strong&gt;%3&lt;/strong&gt; (%2) with entries &lt;em&gt;%4&lt;/em&gt;.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="154"/>
      <source>Create new &lt;strong&gt;%1MiB&lt;/strong&gt; partition on &lt;strong&gt;%3&lt;/strong&gt; (%2).</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="161"/>
      <source>Create new &lt;strong&gt;%2MiB&lt;/strong&gt; partition on &lt;strong&gt;%4&lt;/strong&gt; (%3) with file system &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <translation>Crear nueva&lt;strong&gt;%2MiB&lt;/strong&gt; partición en&lt;strong&gt;%2MiB&lt;/strong&gt; (%3) con el sistema de archivos &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="186"/>
      <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="189"/>
      <source>Creating new %1 partition on %2.</source>
      <translation> Creando nueva partición %1 en %2</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="201"/>
      <source>The installer failed to create partition on disk '%1'.</source>
      <translation>El instalador falló en crear la partición en el disco '%1'.</translation>
    </message>
  </context>
  <context>
    <name>CreatePartitionTableDialog</name>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="24"/>
      <source>Create Partition Table</source>
      <translation>Crear Tabla de Particiones</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="43"/>
      <source>Creating a new partition table will delete all existing data on the disk.</source>
      <translation>Crear una nueva tabla de particiones borrara todos los datos existentes en el disco.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="69"/>
      <source>What kind of partition table do you want to create?</source>
      <translation>¿Qué tipo de tabla de particiones desea crear?</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="76"/>
      <source>Master Boot Record (MBR)</source>
      <translation>Master Boot Record (MBR)</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="86"/>
      <source>GUID Partition Table (GPT)</source>
      <translation>Tabla de Particiones GUID (GPT)</translation>
    </message>
  </context>
  <context>
    <name>CreatePartitionTableJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="39"/>
      <source>Create new %1 partition table on %2.</source>
      <translation> Crear nueva tabla de partición %1 en %2.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="47"/>
      <source>Create new &lt;strong&gt;%1&lt;/strong&gt; partition table on &lt;strong&gt;%2&lt;/strong&gt; (%3).</source>
      <translation> Crear nueva tabla de particiones &lt;strong&gt;%1&lt;/strong&gt; en &lt;strong&gt;%2&lt;/strong&gt; (%3).</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="57"/>
      <source>Creating new %1 partition table on %2.</source>
      <translation> Creando nueva tabla de particiones %1 en %2.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="67"/>
      <source>The installer failed to create a partition table on %1.</source>
      <translation>El instalador falló al crear una tabla de partición en %1.</translation>
    </message>
  </context>
  <context>
    <name>CreateUserJob</name>
    <message>
      <location filename="../src/modules/users/CreateUserJob.cpp" line="36"/>
      <source>Create user %1</source>
      <translation>Crear usuario %1</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CreateUserJob.cpp" line="43"/>
      <source>Create user &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <translation> Crear usuario &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CreateUserJob.cpp" line="126"/>
      <source>Preserving home directory</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/CreateUserJob.cpp" line="50"/>
      <location filename="../src/modules/users/CreateUserJob.cpp" line="143"/>
      <source>Creating user %1</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/CreateUserJob.cpp" line="151"/>
      <source>Configuring user %1</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/CreateUserJob.cpp" line="159"/>
      <source>Setting file permissions</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>CreateVolumeGroupDialog</name>
    <message>
      <location filename="../src/modules/partition/gui/CreateVolumeGroupDialog.cpp" line="28"/>
      <source>Create Volume Group</source>
      <translation>Crear Grupo de Volumen</translation>
    </message>
  </context>
  <context>
    <name>CreateVolumeGroupJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="31"/>
      <source>Create new volume group named %1.</source>
      <translation>Crear nuevo grupo de volumen llamado %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="37"/>
      <source>Create new volume group named &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <translation>Crear nuevo grupo de volumen llamado &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="43"/>
      <source>Creating new volume group named %1.</source>
      <translation>Creando nuevo grupo de volumen llamado %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="55"/>
      <source>The installer failed to create a volume group named '%1'.</source>
      <translation>El instalador no pudo crear un grupo de volumen llamado '%1'.</translation>
    </message>
  </context>
  <context>
    <name>DeactivateVolumeGroupJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="24"/>
      <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="36"/>
      <source>Deactivate volume group named %1.</source>
      <translation>Desactivar el grupo de volúmenes llamado %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="30"/>
      <source>Deactivate volume group named &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <translation>Desactivar el grupo de volúmenes llamado&lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="48"/>
      <source>The installer failed to deactivate a volume group named %1.</source>
      <translation>El instalador no pudo desactivar un grupo de volúmenes llamado %1.</translation>
    </message>
  </context>
  <context>
    <name>DeletePartitionJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="31"/>
      <source>Delete partition %1.</source>
      <translation>Eliminar la partición %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="38"/>
      <source>Delete partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <translation>Eliminar la partición &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="45"/>
      <source>Deleting partition %1.</source>
      <translation>Eliminando partición %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="56"/>
      <source>The installer failed to delete partition %1.</source>
      <translation>El instalador no pudo borrar la partición %1.</translation>
    </message>
  </context>
  <context>
    <name>DeviceInfoWidget</name>
    <message>
      <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="97"/>
      <source>This device has a &lt;strong&gt;%1&lt;/strong&gt; partition table.</source>
      <translation>Este dispositivo tiene una tabla de partición &lt;strong&gt;%1&lt;/strong&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="104"/>
      <source>This is a &lt;strong&gt;loop&lt;/strong&gt; device.&lt;br&gt;&lt;br&gt;It is a pseudo-device with no partition table that makes a file accessible as a block device. This kind of setup usually only contains a single filesystem.</source>
      <translation>Este es un dispositivo&lt;br&gt; &lt;strong&gt;loop&lt;/strong&gt;. &lt;br&gt;Es un pseudo - dispositivo sin tabla de partición que hace un archivo accesible como un dispositivo bloque. Este tipo de configuración usualmente contiene un solo sistema de archivos.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="111"/>
      <source>This installer &lt;strong&gt;cannot detect a partition table&lt;/strong&gt; on the selected storage device.&lt;br&gt;&lt;br&gt;The device either has no partition table, or the partition table is corrupted or of an unknown type.&lt;br&gt;This installer can create a new partition table for you, either automatically, or through the manual partitioning page.</source>
      <translation>Este instalador &lt;strong&gt;no puede detectar una tabla de partición&lt;/strong&gt; en el dispositivo de almacenamiento seleccionado.&lt;br&gt; &lt;br&gt;El dispositivo o no tiene tabla de partición, o la tabla de partición esta corrupta o de un tipo desconocido. &lt;br&gt;Este instalador puede crear una nueva tabla de partición por usted ya sea automáticamente, o a través de la página de particionado manual.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="121"/>
      <source>&lt;br&gt;&lt;br&gt;This is the recommended partition table type for modern systems which start from an &lt;strong&gt;EFI&lt;/strong&gt; boot environment.</source>
      <translation>&lt;br&gt;&lt;br&gt;Este es el tipo de tabla de partición recomendada para sistemas modernos que inician desde un entorno de arranque &lt;strong&gt;EFI&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="127"/>
      <source>&lt;br&gt;&lt;br&gt;This partition table type is only advisable on older systems which start from a &lt;strong&gt;BIOS&lt;/strong&gt; boot environment. GPT is recommended in most other cases.&lt;br&gt;&lt;br&gt;&lt;strong&gt;Warning:&lt;/strong&gt; the MBR partition table is an obsolete MS-DOS era standard.&lt;br&gt;Only 4 &lt;em&gt;primary&lt;/em&gt; partitions may be created, and of those 4, one can be an &lt;em&gt;extended&lt;/em&gt; partition, which may in turn contain many &lt;em&gt;logical&lt;/em&gt; partitions.</source>
      <translation>&lt;br&gt;&lt;br&gt;Este tipo de tabla de partición solo es recomendable en sistemas antiguos que inician desde un entorno de arranque &lt;strong&gt;BIOS&lt;/strong&gt;. GPT es recomendado en la otra mayoría de casos.&lt;br&gt;&lt;br&gt;&lt;strong&gt; Precaución:&lt;/strong&gt; La tabla de partición MBR es una era estándar MS-DOS obsoleta.&lt;br&gt; Unicamente 4 particiones &lt;em&gt;primarias&lt;/em&gt; pueden ser creadas, y de esas 4, una puede ser una partición &lt;em&gt;extendida&lt;/em&gt;, la cual puede a su vez contener varias particiones &lt;em&gt;logicas&lt;/em&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="140"/>
      <source>The type of &lt;strong&gt;partition table&lt;/strong&gt; on the selected storage device.&lt;br&gt;&lt;br&gt;The only way to change the partition table type is to erase and recreate the partition table from scratch, which destroys all data on the storage device.&lt;br&gt;This installer will keep the current partition table unless you explicitly choose otherwise.&lt;br&gt;If unsure, on modern systems GPT is preferred.</source>
      <translation>Este tipo de &lt;strong&gt;tabla de partición&lt;/strong&gt; en el dispositivo de almacenamiento seleccionado.&lt;br&gt; &lt;br&gt;La única forma de cambiar el tipo de tabla de partición es borrar y recrear la tabla de partición de cero. lo cual destruye todos los datos en el dispositivo de almacenamiento.&lt;br&gt; Este instalador conservará la actual tabla de partición a menos que usted explícitamente elija lo contrario. &lt;br&gt;Si no está seguro, en los sistemas modernos GPT es lo preferible.</translation>
    </message>
  </context>
  <context>
    <name>DeviceModel</name>
    <message>
      <location filename="../src/modules/partition/core/DeviceModel.cpp" line="84"/>
      <source>%1 - %2 (%3)</source>
      <extracomment>device[name] - size[number] (device-node[name])</extracomment>
      <translation>%1 - %2 (%3)</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/core/DeviceModel.cpp" line="95"/>
      <source>%1 - (%2)</source>
      <extracomment>device[name] - (device-node[name])</extracomment>
      <translation>%1 - (%2)</translation>
    </message>
  </context>
  <context>
    <name>DracutLuksCfgJob</name>
    <message>
      <location filename="../src/modules/dracutlukscfg/DracutLuksCfgJob.cpp" line="117"/>
      <source>Write LUKS configuration for Dracut to %1</source>
      <translation>Escribe configuración LUKS para Dracut a %1</translation>
    </message>
    <message>
      <location filename="../src/modules/dracutlukscfg/DracutLuksCfgJob.cpp" line="121"/>
      <source>Skip writing LUKS configuration for Dracut: "/" partition is not encrypted</source>
      <translation>Omitir escritura de configuración LUKS por Dracut: "/" partición no está encriptada.</translation>
    </message>
    <message>
      <location filename="../src/modules/dracutlukscfg/DracutLuksCfgJob.cpp" line="138"/>
      <source>Failed to open %1</source>
      <translation>Falla al abrir %1</translation>
    </message>
  </context>
  <context>
    <name>DummyCppJob</name>
    <message>
      <location filename="../src/modules/dummycpp/DummyCppJob.cpp" line="37"/>
      <source>Dummy C++ Job</source>
      <translation>Trabajo C++ Simulado</translation>
    </message>
  </context>
  <context>
    <name>EditExistingPartitionDialog</name>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="24"/>
      <source>Edit Existing Partition</source>
      <translation>Editar Partición Existente</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="54"/>
      <source>Content:</source>
      <translation>Contenido:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="64"/>
      <source>&amp;Keep</source>
      <translation>&amp;Conservar</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="74"/>
      <source>Format</source>
      <translation>Formato</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="93"/>
      <source>Warning: Formatting the partition will erase all existing data.</source>
      <translation>Advertencia: Formatear la partición borrara todos los datos existentes.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="103"/>
      <source>&amp;Mount Point:</source>
      <translation>Punto de &amp;Montaje</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="123"/>
      <source>Si&amp;ze:</source>
      <translation>Tam&amp;año:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="133"/>
      <source> MiB</source>
      <translation> MiB</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="140"/>
      <source>Fi&amp;le System:</source>
      <translation>Sis&amp;tema de Archivos:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="153"/>
      <source>Flags:</source>
      <translation>Indicadores:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="186"/>
      <source>Label for the filesystem</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="196"/>
      <source>FS Label:</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.cpp" line="291"/>
      <source>Mountpoint already in use. Please select another one.</source>
      <translation>Punto de montaje ya esta en uso. Por favor seleccione otro.</translation>
    </message>
  </context>
  <context>
    <name>EncryptWidget</name>
    <message>
      <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="18"/>
      <source>Form</source>
      <translation>Formulario</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="36"/>
      <source>En&amp;crypt system</source>
      <translation>En&amp;criptar sistema</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="46"/>
      <source>Passphrase</source>
      <translation>Contraseña segura</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="56"/>
      <source>Confirm passphrase</source>
      <translation>Confirmar contraseña segura</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EncryptWidget.cpp" line="104"/>
      <location filename="../src/modules/partition/gui/EncryptWidget.cpp" line="114"/>
      <source>Please enter the same passphrase in both boxes.</source>
      <translation>Favor ingrese la misma contraseña segura en ambas casillas.</translation>
    </message>
  </context>
  <context>
    <name>FillGlobalStorageJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="167"/>
      <source>Set partition information</source>
      <translation>Fijar información de la partición. </translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="196"/>
      <source>Install %1 on &lt;strong&gt;new&lt;/strong&gt; %2 system partition with features &lt;em&gt;%3&lt;/em&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="204"/>
      <source>Install %1 on &lt;strong&gt;new&lt;/strong&gt; %2 system partition.</source>
      <translation>Instalar %1 en &lt;strong&gt;nueva&lt;/strong&gt; %2 partición de sistema.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="213"/>
      <source>Set up &lt;strong&gt;new&lt;/strong&gt; %2 partition with mount point &lt;strong&gt;%1&lt;/strong&gt; and features &lt;em&gt;%3&lt;/em&gt;.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="221"/>
      <source>Set up &lt;strong&gt;new&lt;/strong&gt; %2 partition with mount point &lt;strong&gt;%1&lt;/strong&gt;%3.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="235"/>
      <source>Install %2 on %3 system partition &lt;strong&gt;%1&lt;/strong&gt; with features &lt;em&gt;%4&lt;/em&gt;.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="254"/>
      <source>Set up %3 partition &lt;strong&gt;%1&lt;/strong&gt; with mount point &lt;strong&gt;%2&lt;/strong&gt; and features &lt;em&gt;%4&lt;/em&gt;.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="263"/>
      <source>Set up %3 partition &lt;strong&gt;%1&lt;/strong&gt; with mount point &lt;strong&gt;%2&lt;/strong&gt;%4.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="244"/>
      <source>Install %2 on %3 system partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <translation>Instalar %2 en %3 partición del sistema &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="278"/>
      <source>Install boot loader on &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <translation>Instalar el cargador de arranque en &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="287"/>
      <source>Setting up mount points.</source>
      <translation>Configurando puntos de montaje.</translation>
    </message>
  </context>
  <context>
    <name>FinishedPage</name>
    <message>
      <location filename="../src/modules/finished/FinishedPage.ui" line="18"/>
      <source>Form</source>
      <translation>Formulario</translation>
    </message>
    <message>
      <location filename="../src/modules/finished/FinishedPage.ui" line="102"/>
      <source>&amp;Restart now</source>
      <translation>&amp;Reiniciar ahora</translation>
    </message>
    <message>
      <location filename="../src/modules/finished/FinishedPage.cpp" line="72"/>
      <source>&lt;h1&gt;All done.&lt;/h1&gt;&lt;br/&gt;%1 has been set up on your computer.&lt;br/&gt;You may now start using your new system.</source>
      <translation>&lt;h1&gt;Todo listo.&lt;/h1&gt;&lt;br/&gt;%1 se ha configurado en su computadora. &lt;br/&gt;Ahora puede comenzar a usar su nuevo sistema.</translation>
    </message>
    <message>
      <location filename="../src/modules/finished/FinishedPage.cpp" line="76"/>
      <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;When this box is checked, your system will restart immediately when you click on &lt;span style="font-style:italic;"&gt;Done&lt;/span&gt; or close the setup program.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
      <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Cuando esta casilla está marcada, su sistema se reiniciará inmediatamente cuando haga clic en &lt;span style="font-style:italic;"&gt;Listo&lt;/span&gt; o cierre el programa de instalación.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/finished/FinishedPage.cpp" line="84"/>
      <source>&lt;h1&gt;All done.&lt;/h1&gt;&lt;br/&gt;%1 has been installed on your computer.&lt;br/&gt;You may now restart into your new system, or continue using the %2 Live environment.</source>
      <translation>&lt;h1&gt;Listo.&lt;/h1&gt;&lt;br/&gt;%1 ha sido instalado en su computadora.&lt;br/&gt;Ahora puede reiniciar su nuevo sistema, o continuar usando el entorno Live %2.</translation>
    </message>
    <message>
      <location filename="../src/modules/finished/FinishedPage.cpp" line="89"/>
      <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;When this box is checked, your system will restart immediately when you click on &lt;span style="font-style:italic;"&gt;Done&lt;/span&gt; or close the installer.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/finished/FinishedPage.cpp" line="102"/>
      <source>&lt;h1&gt;Setup Failed&lt;/h1&gt;&lt;br/&gt;%1 has not been set up on your computer.&lt;br/&gt;The error message was: %2.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/finished/FinishedPage.cpp" line="110"/>
      <source>&lt;h1&gt;Installation Failed&lt;/h1&gt;&lt;br/&gt;%1 has not been installed on your computer.&lt;br/&gt;The error message was: %2.</source>
      <translation>&lt;h1&gt;Instalación fallida&lt;/h1&gt; &lt;br/&gt;%1 no ha sido instalado en su computador. &lt;br/&gt;El mensaje de error es: %2.</translation>
    </message>
  </context>
  <context>
    <name>FinishedQmlViewStep</name>
    <message>
      <location filename="../src/modules/finishedq/FinishedQmlViewStep.cpp" line="35"/>
      <source>Finish</source>
      <translation>Terminado</translation>
    </message>
  </context>
  <context>
    <name>FinishedViewStep</name>
    <message>
      <location filename="../src/modules/finished/FinishedViewStep.cpp" line="46"/>
      <source>Finish</source>
      <translation>Terminado</translation>
    </message>
  </context>
  <context>
    <name>FormatPartitionJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="36"/>
      <source>Format partition %1 (file system: %2, size: %3 MiB) on %4.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="47"/>
      <source>Format &lt;strong&gt;%3MiB&lt;/strong&gt; partition &lt;strong&gt;%1&lt;/strong&gt; with file system &lt;strong&gt;%2&lt;/strong&gt;.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="58"/>
      <source>Formatting partition %1 with file system %2.</source>
      <translation>Formateando partición %1 con sistema de archivos %2.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="72"/>
      <source>The installer failed to format partition %1 on disk '%2'.</source>
      <translation>El instalador no ha podido formatear la partición %1 en el disco '%2'</translation>
    </message>
  </context>
  <context>
    <name>GeneralRequirements</name>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="155"/>
      <source>has at least %1 GiB available drive space</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="157"/>
      <source>There is not enough drive space. At least %1 GiB is required.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="166"/>
      <source>has at least %1 GiB working memory</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="168"/>
      <source>The system does not have enough working memory. At least %1 GiB is required.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="177"/>
      <source>is plugged in to a power source</source>
      <translation>está conectado a una fuente de energía</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="178"/>
      <source>The system is not plugged in to a power source.</source>
      <translation>El sistema no está conectado a una fuente de energía.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="185"/>
      <source>is connected to the Internet</source>
      <translation>está conectado a Internet</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="186"/>
      <source>The system is not connected to the Internet.</source>
      <translation>El sistema no está conectado a Internet.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="193"/>
      <source>is running the installer as an administrator (root)</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="196"/>
      <source>The setup program is not running with administrator rights.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="197"/>
      <source>The installer is not running with administrator rights.</source>
      <translation>El instalador no se está ejecutando con privilegios de administrador.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="205"/>
      <source>has a screen large enough to show the whole installer</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="208"/>
      <source>The screen is too small to display the setup program.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="209"/>
      <source>The screen is too small to display the installer.</source>
      <translation>La pantalla es muy pequeña para mostrar el instalador</translation>
    </message>
  </context>
  <context>
    <name>HostInfoJob</name>
    <message>
      <location filename="../src/modules/hostinfo/HostInfoJob.cpp" line="42"/>
      <source>Collecting information about your machine.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>IDJob</name>
    <message>
      <location filename="../src/modules/oemid/IDJob.cpp" line="30"/>
      <location filename="../src/modules/oemid/IDJob.cpp" line="39"/>
      <location filename="../src/modules/oemid/IDJob.cpp" line="52"/>
      <location filename="../src/modules/oemid/IDJob.cpp" line="59"/>
      <source>OEM Batch Identifier</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/oemid/IDJob.cpp" line="40"/>
      <source>Could not create directories &lt;code&gt;%1&lt;/code&gt;.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/oemid/IDJob.cpp" line="53"/>
      <source>Could not open file &lt;code&gt;%1&lt;/code&gt;.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/oemid/IDJob.cpp" line="60"/>
      <source>Could not write to file &lt;code&gt;%1&lt;/code&gt;.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>InitcpioJob</name>
    <message>
      <location filename="../src/modules/initcpio/InitcpioJob.cpp" line="31"/>
      <source>Creating initramfs with mkinitcpio.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>InitramfsJob</name>
    <message>
      <location filename="../src/modules/initramfs/InitramfsJob.cpp" line="28"/>
      <source>Creating initramfs.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>InteractiveTerminalPage</name>
    <message>
      <location filename="../src/modules/interactiveterminal/InteractiveTerminalPage.cpp" line="44"/>
      <source>Konsole not installed</source>
      <translation>Konsole no instalado</translation>
    </message>
    <message>
      <location filename="../src/modules/interactiveterminal/InteractiveTerminalPage.cpp" line="44"/>
      <source>Please install KDE Konsole and try again!</source>
      <translation>Favor instale la Konsola KDE e intentelo de nuevo!</translation>
    </message>
    <message>
      <location filename="../src/modules/interactiveterminal/InteractiveTerminalPage.cpp" line="103"/>
      <source>Executing script: &amp;nbsp;&lt;code&gt;%1&lt;/code&gt;</source>
      <translation>Ejecutando script: &amp;nbsp;&lt;code&gt;%1&lt;/code&gt;</translation>
    </message>
  </context>
  <context>
    <name>InteractiveTerminalViewStep</name>
    <message>
      <location filename="../src/modules/interactiveterminal/InteractiveTerminalViewStep.cpp" line="41"/>
      <source>Script</source>
      <translation>Script</translation>
    </message>
  </context>
  <context>
    <name>KeyboardQmlViewStep</name>
    <message>
      <location filename="../src/modules/keyboardq/KeyboardQmlViewStep.cpp" line="32"/>
      <source>Keyboard</source>
      <translation>Teclado</translation>
    </message>
  </context>
  <context>
    <name>KeyboardViewStep</name>
    <message>
      <location filename="../src/modules/keyboard/KeyboardViewStep.cpp" line="42"/>
      <source>Keyboard</source>
      <translation>Teclado</translation>
    </message>
  </context>
  <context>
    <name>LCLocaleDialog</name>
    <message>
      <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="23"/>
      <source>System locale setting</source>
      <translation>Configuración de localización del sistema</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="30"/>
      <source>The system locale setting affects the language and character set for some command line user interface elements.&lt;br/&gt;The current setting is &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <translation>La configuración regional del sistema afecta al idioma y a al conjunto de caracteres para algunos elementos de interfaz de la linea de comandos.&lt;br/&gt;La configuración actual es &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="54"/>
      <source>&amp;Cancel</source>
      <translation>&amp;Cancelar</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="55"/>
      <source>&amp;OK</source>
      <translation>&amp;OK</translation>
    </message>
  </context>
  <context>
    <name>LicensePage</name>
    <message>
      <location filename="../src/modules/license/LicensePage.ui" line="18"/>
      <source>Form</source>
      <translation>Formulario</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicensePage.ui" line="26"/>
      <source>&lt;h1&gt;License Agreement&lt;/h1&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/license/LicensePage.cpp" line="136"/>
      <source>I accept the terms and conditions above.</source>
      <translation>Acepto los terminos y condiciones anteriores.</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicensePage.cpp" line="138"/>
      <source>Please review the End User License Agreements (EULAs).</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/license/LicensePage.cpp" line="143"/>
      <source>This setup procedure will install proprietary software that is subject to licensing terms.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/license/LicensePage.cpp" line="146"/>
      <source>If you do not agree with the terms, the setup procedure cannot continue.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/license/LicensePage.cpp" line="151"/>
      <source>This setup procedure can install proprietary software that is subject to licensing terms in order to provide additional features and enhance the user experience.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/license/LicensePage.cpp" line="156"/>
      <source>If you do not agree with the terms, proprietary software will not be installed, and open source alternatives will be used instead.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>LicenseViewStep</name>
    <message>
      <location filename="../src/modules/license/LicenseViewStep.cpp" line="43"/>
      <source>License</source>
      <translation>Licencia</translation>
    </message>
  </context>
  <context>
    <name>LicenseWidget</name>
    <message>
      <location filename="../src/modules/license/LicenseWidget.cpp" line="88"/>
      <source>URL: %1</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/license/LicenseWidget.cpp" line="109"/>
      <source>&lt;strong&gt;%1 driver&lt;/strong&gt;&lt;br/&gt;by %2</source>
      <extracomment>%1 is an untranslatable product name, example: Creative Audigy driver</extracomment>
      <translation>&lt;strong&gt;controlador %1&lt;/strong&gt;&lt;br/&gt;por %2</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicenseWidget.cpp" line="116"/>
      <source>&lt;strong&gt;%1 graphics driver&lt;/strong&gt;&lt;br/&gt;&lt;font color="Grey"&gt;by %2&lt;/font&gt;</source>
      <extracomment>%1 is usually a vendor name, example: Nvidia graphics driver</extracomment>
      <translation> &lt;strong&gt;controladores gráficos de %1&lt;/strong&gt;&lt;br/&gt;&lt;font color="Grey"&gt;por %2&lt;/font&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicenseWidget.cpp" line="122"/>
      <source>&lt;strong&gt;%1 browser plugin&lt;/strong&gt;&lt;br/&gt;&lt;font color="Grey"&gt;by %2&lt;/font&gt;</source>
      <translation> &lt;strong&gt;plugin del navegador %1&lt;/strong&gt;&lt;br/&gt;&lt;font color="Grey"&gt;por %2&lt;/font&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicenseWidget.cpp" line="128"/>
      <source>&lt;strong&gt;%1 codec&lt;/strong&gt;&lt;br/&gt;&lt;font color="Grey"&gt;by %2&lt;/font&gt;</source>
      <translation>&lt;strong&gt;codec %1&lt;/strong&gt;&lt;br/&gt;&lt;font color="Grey"&gt;por %2&lt;/font&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicenseWidget.cpp" line="134"/>
      <source>&lt;strong&gt;%1 package&lt;/strong&gt;&lt;br/&gt;&lt;font color="Grey"&gt;by %2&lt;/font&gt;</source>
      <translation>&lt;strong&gt;paquete %1&lt;/strong&gt;&lt;br/&gt;&lt;font color="Grey"&gt;por %2&lt;/font&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicenseWidget.cpp" line="140"/>
      <source>&lt;strong&gt;%1&lt;/strong&gt;&lt;br/&gt;&lt;font color="Grey"&gt;by %2&lt;/font&gt;</source>
      <translation>&lt;strong&gt;%1&lt;/strong&gt;&lt;br/&gt;&lt;font color="Grey"&gt;por %2&lt;/font&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicenseWidget.cpp" line="163"/>
      <source>File: %1</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/license/LicenseWidget.cpp" line="186"/>
      <source>Hide license text</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/license/LicenseWidget.cpp" line="186"/>
      <source>Show the license text</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/license/LicenseWidget.cpp" line="190"/>
      <source>Open license agreement in browser.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>LocalePage</name>
    <message>
      <location filename="../src/modules/locale/LocalePage.cpp" line="130"/>
      <source>Region:</source>
      <translation>Región:</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/LocalePage.cpp" line="131"/>
      <source>Zone:</source>
      <translation>Zona:</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/LocalePage.cpp" line="132"/>
      <location filename="../src/modules/locale/LocalePage.cpp" line="133"/>
      <source>&amp;Change...</source>
      <translation>&amp;Cambiar...</translation>
    </message>
  </context>
  <context>
    <name>LocaleQmlViewStep</name>
    <message>
      <location filename="../src/modules/localeq/LocaleQmlViewStep.cpp" line="32"/>
      <source>Location</source>
      <translation>Ubicación</translation>
    </message>
  </context>
  <context>
    <name>LocaleTests</name>
    <message>
      <location filename="../src/libcalamares/locale/Tests.cpp" line="273"/>
      <source>Quit</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>LocaleViewStep</name>
    <message>
      <location filename="../src/modules/locale/LocaleViewStep.cpp" line="76"/>
      <source>Location</source>
      <translation>Ubicación</translation>
    </message>
  </context>
  <context>
    <name>LuksBootKeyFileJob</name>
    <message>
      <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="28"/>
      <source>Configuring LUKS key file.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="168"/>
      <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="176"/>
      <source>No partitions are defined.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="211"/>
      <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="218"/>
      <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="226"/>
      <source>Encrypted rootfs setup error</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="212"/>
      <source>Root partition %1 is LUKS but no passphrase has been set.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="219"/>
      <source>Could not create LUKS key file for root partition %1.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="227"/>
      <source>Could not configure LUKS key file on partition %1.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>MachineIdJob</name>
    <message>
      <location filename="../src/modules/machineid/MachineIdJob.cpp" line="37"/>
      <source>Generate machine-id.</source>
      <translation>Generar identificación de la maquina.</translation>
    </message>
    <message>
      <location filename="../src/modules/machineid/MachineIdJob.cpp" line="53"/>
      <source>Configuration Error</source>
      <translation>Error de configuración</translation>
    </message>
    <message>
      <location filename="../src/modules/machineid/MachineIdJob.cpp" line="54"/>
      <source>No root mount point is set for MachineId.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>Map</name>
    <message>
      <location filename="../src/modules/localeq/Map.qml" line="243"/>
      <source>Timezone: %1</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/localeq/Map.qml" line="264"/>
      <source>Please select your preferred location on the map so the installer can suggest the locale
            and timezone settings for you. You can fine-tune the suggested settings below. Search the map by dragging
            to move and using the +/- buttons to zoom in/out or use mouse scrolling for zooming.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>NetInstallViewStep</name>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="49"/>
      <source>Package selection</source>
      <translation>Selección de paquete</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="50"/>
      <source>Office software</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="51"/>
      <source>Office package</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="52"/>
      <source>Browser software</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="53"/>
      <source>Browser package</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="54"/>
      <source>Web browser</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="55"/>
      <source>Kernel</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="56"/>
      <source>Services</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="57"/>
      <source>Login</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="58"/>
      <source>Desktop</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="59"/>
      <source>Applications</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="60"/>
      <source>Communication</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="61"/>
      <source>Development</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="62"/>
      <source>Office</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="63"/>
      <source>Multimedia</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="64"/>
      <source>Internet</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="65"/>
      <source>Theming</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="66"/>
      <source>Gaming</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="67"/>
      <source>Utilities</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>NotesQmlViewStep</name>
    <message>
      <location filename="../src/modules/notesqml/NotesQmlViewStep.cpp" line="23"/>
      <source>Notes</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>OEMPage</name>
    <message>
      <location filename="../src/modules/oemid/OEMPage.ui" line="32"/>
      <source>Ba&amp;tch:</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/oemid/OEMPage.ui" line="42"/>
      <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Enter a batch-identifier here. This will be stored in the target system.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/oemid/OEMPage.ui" line="52"/>
      <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;h1&gt;OEM Configuration&lt;/h1&gt;&lt;p&gt;Calamares will use OEM settings while configuring the target system.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>OEMViewStep</name>
    <message>
      <location filename="../src/modules/oemid/OEMViewStep.cpp" line="122"/>
      <source>OEM Configuration</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/oemid/OEMViewStep.cpp" line="128"/>
      <source>Set the OEM Batch Identifier to &lt;code&gt;%1&lt;/code&gt;.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>Offline</name>
    <message>
      <location filename="../src/modules/localeq/Offline.qml" line="41"/>
      <source>Select your preferred Region, or use the default settings.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/localeq/Offline.qml" line="98"/>
      <location filename="../src/modules/localeq/Offline.qml" line="173"/>
      <location filename="../src/modules/localeq/Offline.qml" line="217"/>
      <source>Timezone: %1</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/localeq/Offline.qml" line="115"/>
      <source>Select your preferred Zone within your Region.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/localeq/Offline.qml" line="186"/>
      <source>Zones</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/localeq/Offline.qml" line="233"/>
      <source>You can fine-tune Language and Locale settings below.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>PWQ</name>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="51"/>
      <source>Password is too short</source>
      <translation>La contraseña es muy corta</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="67"/>
      <source>Password is too long</source>
      <translation>La contraseña es muy larga</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="188"/>
      <source>Password is too weak</source>
      <translation>La contraseña es muy débil</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="196"/>
      <source>Memory allocation error when setting '%1'</source>
      <translation>Error de asignación de memoria al configurar '%1'</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="199"/>
      <source>Memory allocation error</source>
      <translation>Error en la asignación de memoria</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="201"/>
      <source>The password is the same as the old one</source>
      <translation>La contraseña es la misma que la anterior</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="203"/>
      <source>The password is a palindrome</source>
      <translation>La contraseña es un Palíndromo</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="205"/>
      <source>The password differs with case changes only</source>
      <translation>La contraseña solo difiere en cambios de mayúsculas y minúsculas</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="207"/>
      <source>The password is too similar to the old one</source>
      <translation>La contraseña es muy similar a la anterior.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="209"/>
      <source>The password contains the user name in some form</source>
      <translation>La contraseña contiene el nombre de usuario de alguna forma</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="211"/>
      <source>The password contains words from the real name of the user in some form</source>
      <translation>La contraseña contiene palabras del nombre real del usuario de alguna forma</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="214"/>
      <source>The password contains forbidden words in some form</source>
      <translation>La contraseña contiene palabras prohibidas de alguna forma</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="221"/>
      <source>The password contains too few digits</source>
      <translation>La contraseña contiene muy pocos dígitos</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="228"/>
      <source>The password contains too few uppercase letters</source>
      <translation>La contraseña contiene muy pocas letras mayúsculas</translation>
    </message>
    <message numerus="yes">
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="232"/>
      <source>The password contains fewer than %n lowercase letters</source>
      <translation type="unfinished">
        <numerusform/>
        <numerusform/>
      </translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="235"/>
      <source>The password contains too few lowercase letters</source>
      <translation>La contraseña contiene muy pocas letras minúsculas</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="242"/>
      <source>The password contains too few non-alphanumeric characters</source>
      <translation>La contraseña contiene muy pocos caracteres alfanuméricos</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="249"/>
      <source>The password is too short</source>
      <translation>La contraseña es muy corta</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="258"/>
      <source>The password does not contain enough character classes</source>
      <translation>La contraseña no contiene suficientes tipos de caracteres</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="265"/>
      <source>The password contains too many same characters consecutively</source>
      <translation>La contraseña contiene muchos caracteres iguales repetidos consecutivamente</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="275"/>
      <source>The password contains too many characters of the same class consecutively</source>
      <translation>La contraseña contiene muchos caracteres de la misma clase consecutivamente</translation>
    </message>
    <message numerus="yes">
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="218"/>
      <source>The password contains fewer than %n digits</source>
      <translation type="unfinished">
        <numerusform/>
        <numerusform/>
      </translation>
    </message>
    <message numerus="yes">
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="225"/>
      <source>The password contains fewer than %n uppercase letters</source>
      <translation type="unfinished">
        <numerusform/>
        <numerusform/>
      </translation>
    </message>
    <message numerus="yes">
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="239"/>
      <source>The password contains fewer than %n non-alphanumeric characters</source>
      <translation type="unfinished">
        <numerusform/>
        <numerusform/>
      </translation>
    </message>
    <message numerus="yes">
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="246"/>
      <source>The password is shorter than %n characters</source>
      <translation type="unfinished">
        <numerusform/>
        <numerusform/>
      </translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="251"/>
      <source>The password is a rotated version of the previous one</source>
      <translation type="unfinished"/>
    </message>
    <message numerus="yes">
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="255"/>
      <source>The password contains fewer than %n character classes</source>
      <translation type="unfinished">
        <numerusform/>
        <numerusform/>
      </translation>
    </message>
    <message numerus="yes">
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="262"/>
      <source>The password contains more than %n same characters consecutively</source>
      <translation type="unfinished">
        <numerusform/>
        <numerusform/>
      </translation>
    </message>
    <message numerus="yes">
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="269"/>
      <source>The password contains more than %n characters of the same class consecutively</source>
      <translation type="unfinished">
        <numerusform/>
        <numerusform/>
      </translation>
    </message>
    <message numerus="yes">
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="280"/>
      <source>The password contains monotonic sequence longer than %n characters</source>
      <translation type="unfinished">
        <numerusform/>
        <numerusform/>
      </translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="286"/>
      <source>The password contains too long of a monotonic character sequence</source>
      <translation>La contraseña contiene secuencias monotónicas muy largas</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="289"/>
      <source>No password supplied</source>
      <translation>Contraseña no suministrada</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="291"/>
      <source>Cannot obtain random numbers from the RNG device</source>
      <translation>No pueden obtenerse números aleatorios del dispositivo RING</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="293"/>
      <source>Password generation failed - required entropy too low for settings</source>
      <translation>Generación de contraseña fallida - entropía requerida muy baja para los ajustes</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="298"/>
      <source>The password fails the dictionary check - %1</source>
      <translation>La contraseña falla el chequeo del diccionario %1</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="301"/>
      <source>The password fails the dictionary check</source>
      <translation>La contraseña falla el chequeo del diccionario</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="305"/>
      <source>Unknown setting - %1</source>
      <translation>Configuración desconocida - %1</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="307"/>
      <source>Unknown setting</source>
      <translation>Configuración desconocida</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="311"/>
      <source>Bad integer value of setting - %1</source>
      <translation>Valor entero de configuración incorrecto - %1</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="313"/>
      <source>Bad integer value</source>
      <translation>Valor entero incorrecto</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="317"/>
      <source>Setting %1 is not of integer type</source>
      <translation>Ajuste de %1 no es de tipo entero</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="319"/>
      <source>Setting is not of integer type</source>
      <translation>Ajuste no es de tipo entero</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="323"/>
      <source>Setting %1 is not of string type</source>
      <translation>El ajuste %1 no es de tipo cadena</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="325"/>
      <source>Setting is not of string type</source>
      <translation>El ajuste no es de tipo cadena</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="327"/>
      <source>Opening the configuration file failed</source>
      <translation>Apertura del archivo de configuración fallida</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="329"/>
      <source>The configuration file is malformed</source>
      <translation>El archivo de configuración está malformado</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="331"/>
      <source>Fatal failure</source>
      <translation>Falla fatal</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="333"/>
      <source>Unknown error</source>
      <translation>Error desconocido</translation>
    </message>
    <message>
      <location filename="../src/modules/users/Config.cpp" line="782"/>
      <source>Password is empty</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>PackageChooserPage</name>
    <message>
      <location filename="../src/modules/packagechooser/page_package.ui" line="24"/>
      <source>Form</source>
      <translation>Formulario</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooser/page_package.ui" line="44"/>
      <source>Product Name</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/packagechooser/page_package.ui" line="57"/>
      <source>TextLabel</source>
      <translation>Etiqueta de texto</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooser/page_package.ui" line="73"/>
      <source>Long Product Description</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/packagechooser/PackageChooserPage.cpp" line="25"/>
      <source>Package Selection</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/packagechooser/PackageChooserPage.cpp" line="26"/>
      <source>Please pick a product from the list. The selected product will be installed.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>PackageChooserViewStep</name>
    <message>
      <location filename="../src/modules/packagechooser/PackageChooserViewStep.cpp" line="51"/>
      <source>Packages</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>PackageModel</name>
    <message>
      <location filename="../src/modules/netinstall/PackageModel.cpp" line="168"/>
      <source>Name</source>
      <translation>Nombre</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/PackageModel.cpp" line="168"/>
      <source>Description</source>
      <translation>Descripción</translation>
    </message>
  </context>
  <context>
    <name>Page_Keyboard</name>
    <message>
      <location filename="../src/modules/keyboard/KeyboardPage.ui" line="18"/>
      <source>Form</source>
      <translation>Formulario</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboard/KeyboardPage.ui" line="74"/>
      <source>Keyboard Model:</source>
      <translation>Modelo de teclado:</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboard/KeyboardPage.ui" line="135"/>
      <source>Type here to test your keyboard</source>
      <translation>Teclee aquí para probar su teclado</translation>
    </message>
  </context>
  <context>
    <name>Page_UserSetup</name>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="18"/>
      <source>Form</source>
      <translation>Formulario</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="40"/>
      <source>What is your name?</source>
      <translation>¿Cuál es su nombre?</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="55"/>
      <source>Your Full Name</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="124"/>
      <source>What name do you want to use to log in?</source>
      <translation>¿Qué nombre desea usar para acceder al sistema?</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="148"/>
      <source>login</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="223"/>
      <source>What is the name of this computer?</source>
      <translation>¿Cuál es el nombre de esta computadora?</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="247"/>
      <source>&lt;small&gt;This name will be used if you make the computer visible to others on a network.&lt;/small&gt;</source>
      <translation>&lt;small&gt;Este nombre sera usado si hace esta computadora visible para otros en una red.&lt;/small&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="250"/>
      <source>Computer Name</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="325"/>
      <source>Choose a password to keep your account safe.</source>
      <translation>Seleccione una contraseña para mantener segura su cuenta.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="349"/>
      <location filename="../src/modules/users/page_usersetup.ui" line="374"/>
      <source>&lt;small&gt;Enter the same password twice, so that it can be checked for typing errors. A good password will contain a mixture of letters, numbers and punctuation, should be at least eight characters long, and should be changed at regular intervals.&lt;/small&gt;</source>
      <translation>&lt;small&gt;Escribe dos veces la misma contraseña para que se pueda comprobar si tiene errores. Una buena contraseña está formada por letras, números y signos de puntuación, tiene por lo menos ocho caracteres y hay que cambiarla cada cierto tiempo.&lt;/small&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="355"/>
      <location filename="../src/modules/users/page_usersetup.ui" line="525"/>
      <source>Password</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="380"/>
      <location filename="../src/modules/users/page_usersetup.ui" line="550"/>
      <source>Repeat Password</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="455"/>
      <source>When this box is checked, password-strength checking is done and you will not be able to use a weak password.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="458"/>
      <source>Require strong passwords.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="465"/>
      <source>Log in automatically without asking for the password.</source>
      <translation>Iniciar sesión automáticamente sin preguntar por la contraseña.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="472"/>
      <source>Use the same password for the administrator account.</source>
      <translation>Usar la misma contraseña para la cuenta de administrador.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="495"/>
      <source>Choose a password for the administrator account.</source>
      <translation>Elegir una contraseña para la cuenta de administrador.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="519"/>
      <location filename="../src/modules/users/page_usersetup.ui" line="544"/>
      <source>&lt;small&gt;Enter the same password twice, so that it can be checked for typing errors.&lt;/small&gt;</source>
      <translation>&lt;small&gt;Escribe dos veces la contraseña para comprobar si tiene errores&lt;/small&gt;</translation>
    </message>
  </context>
  <context>
    <name>PartitionLabelsView</name>
    <message>
      <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="190"/>
      <source>Root</source>
      <translation>Root</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="194"/>
      <source>Home</source>
      <translation>Home</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="198"/>
      <source>Boot</source>
      <translation>Boot</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="203"/>
      <source>EFI system</source>
      <translation>Sistema EFI</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="207"/>
      <source>Swap</source>
      <translation>Swap</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="211"/>
      <source>New partition for %1</source>
      <translation>Partición nueva para %1</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="215"/>
      <source>New partition</source>
      <translation>Partición nueva</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="239"/>
      <source>%1  %2</source>
      <extracomment>size[number] filesystem[name]</extracomment>
      <translation>%1 %2</translation>
    </message>
  </context>
  <context>
    <name>PartitionModel</name>
    <message>
      <location filename="../src/modules/partition/core/PartitionModel.cpp" line="159"/>
      <location filename="../src/modules/partition/core/PartitionModel.cpp" line="203"/>
      <source>Free Space</source>
      <translation>Espacio libre</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/core/PartitionModel.cpp" line="163"/>
      <location filename="../src/modules/partition/core/PartitionModel.cpp" line="207"/>
      <source>New partition</source>
      <translation>Partición nueva</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/core/PartitionModel.cpp" line="300"/>
      <source>Name</source>
      <translation>Nombre</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/core/PartitionModel.cpp" line="302"/>
      <source>File System</source>
      <translation>Sistema de archivos</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/core/PartitionModel.cpp" line="304"/>
      <source>File System Label</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/core/PartitionModel.cpp" line="306"/>
      <source>Mount Point</source>
      <translation>Punto de montaje</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/core/PartitionModel.cpp" line="308"/>
      <source>Size</source>
      <translation>Tamaño</translation>
    </message>
  </context>
  <context>
    <name>PartitionPage</name>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="18"/>
      <source>Form</source>
      <translation>Formulario</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="26"/>
      <source>Storage de&amp;vice:</source>
      <translation> Dis&amp;positivo de almacenamiento:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="55"/>
      <source>&amp;Revert All Changes</source>
      <translation>&amp;Deshacer todos los cambios</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="91"/>
      <source>New Partition &amp;Table</source>
      <translation>Nueva &amp;tabla de particiones</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="111"/>
      <source>Cre&amp;ate</source>
      <translation>Cre&amp;ar</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="118"/>
      <source>&amp;Edit</source>
      <translation>&amp;Editar</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="125"/>
      <source>&amp;Delete</source>
      <translation>&amp;Borrar</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="136"/>
      <source>New Volume Group</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="143"/>
      <source>Resize Volume Group</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="150"/>
      <source>Deactivate Volume Group</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="157"/>
      <source>Remove Volume Group</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="184"/>
      <source>I&amp;nstall boot loader on:</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.cpp" line="219"/>
      <source>Are you sure you want to create a new partition table on %1?</source>
      <translation>¿Está seguro de querer crear una nueva tabla de particiones en %1?</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.cpp" line="254"/>
      <source>Can not create new partition</source>
      <translation>No se puede crear nueva partición</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.cpp" line="255"/>
      <source>The partition table on %1 already has %2 primary partitions, and no more can be added. Please remove one primary partition and add an extended partition, instead.</source>
      <translation>La tabla de partición en %1 ya tiene %2 particiones primarias, y no pueden agregarse mas. Favor remover una partición primaria y en cambio, agregue una partición extendida.</translation>
    </message>
  </context>
  <context>
    <name>PartitionViewStep</name>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="54"/>
      <source>Gathering system information...</source>
      <translation>Obteniendo información del sistema...</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="109"/>
      <source>Partitions</source>
      <translation>Particiones</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="147"/>
      <source>Install %1 &lt;strong&gt;alongside&lt;/strong&gt; another operating system.</source>
      <translation> Instalar %1 &lt;strong&gt;junto con&lt;/strong&gt; otro sistema operativo.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="151"/>
      <source>&lt;strong&gt;Erase&lt;/strong&gt; disk and install %1.</source>
      <translation> &lt;strong&gt;Borrar&lt;/strong&gt; el disco e instalar %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="154"/>
      <source>&lt;strong&gt;Replace&lt;/strong&gt; a partition with %1.</source>
      <translation> &lt;strong&gt;Reemplazar&lt;/strong&gt; una parición con %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="158"/>
      <source>&lt;strong&gt;Manual&lt;/strong&gt; partitioning.</source>
      <translation> Particionamiento &lt;strong&gt;manual&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="171"/>
      <source>Install %1 &lt;strong&gt;alongside&lt;/strong&gt; another operating system on disk &lt;strong&gt;%2&lt;/strong&gt; (%3).</source>
      <translation> Instalar %1 &lt;strong&gt;junto con&lt;/strong&gt; otro sistema operativo en el disco &lt;strong&gt;%2&lt;/strong&gt;(%3).</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="178"/>
      <source>&lt;strong&gt;Erase&lt;/strong&gt; disk &lt;strong&gt;%2&lt;/strong&gt; (%3) and install %1.</source>
      <translation>&lt;strong&gt;Borrar&lt;/strong&gt; el disco &lt;strong&gt;%2&lt;strong&gt; (%3) e instalar %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="184"/>
      <source>&lt;strong&gt;Replace&lt;/strong&gt; a partition on disk &lt;strong&gt;%2&lt;/strong&gt; (%3) with %1.</source>
      <translation> &lt;strong&gt;Reemplazar&lt;/strong&gt; una parición en el disco &lt;strong&gt;%2&lt;/strong&gt; (%3) con %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="191"/>
      <source>&lt;strong&gt;Manual&lt;/strong&gt; partitioning on disk &lt;strong&gt;%1&lt;/strong&gt; (%2).</source>
      <translation> Particionar &lt;strong&gt;manualmente&lt;/strong&gt; el disco &lt;strong&gt;%1&lt;/strong&gt; (%2).</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="200"/>
      <source>Disk &lt;strong&gt;%1&lt;/strong&gt; (%2)</source>
      <translation>Disco &lt;strong&gt;%1&lt;/strong&gt; (%2)</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="226"/>
      <source>Current:</source>
      <translation>Actual:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="244"/>
      <source>After:</source>
      <translation>Después:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="450"/>
      <source>No EFI system partition configured</source>
      <translation>Sistema de partición EFI no configurada</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="451"/>
      <source>An EFI system partition is necessary to start %1.&lt;br/&gt;&lt;br/&gt;To configure an EFI system partition, go back and select or create a FAT32 filesystem with the &lt;strong&gt;%3&lt;/strong&gt; flag enabled and mount point &lt;strong&gt;%2&lt;/strong&gt;.&lt;br/&gt;&lt;br/&gt;You can continue without setting up an EFI system partition but your system may fail to start.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="465"/>
      <source>An EFI system partition is necessary to start %1.&lt;br/&gt;&lt;br/&gt;A partition was configured with mount point &lt;strong&gt;%2&lt;/strong&gt; but its &lt;strong&gt;%3&lt;/strong&gt; flag is not set.&lt;br/&gt;To set the flag, go back and edit the partition.&lt;br/&gt;&lt;br/&gt;You can continue without setting the flag but your system may fail to start.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="464"/>
      <source>EFI system partition flag not set</source>
      <translation>Indicador de partición del sistema EFI no configurado</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="491"/>
      <source>Option to use GPT on BIOS</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="492"/>
      <source>A GPT partition table is the best option for all systems. This installer supports such a setup for BIOS systems too.&lt;br/&gt;&lt;br/&gt;To configure a GPT partition table on BIOS, (if not done so already) go back and set the partition table to GPT, next create a 8 MB unformatted partition with the &lt;strong&gt;bios_grub&lt;/strong&gt; flag enabled.&lt;br/&gt;&lt;br/&gt;An unformatted 8 MB partition is necessary to start %1 on a BIOS system with GPT.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="521"/>
      <source>Boot partition not encrypted</source>
      <translation>Partición de arranque no encriptada</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="522"/>
      <source>A separate boot partition was set up together with an encrypted root partition, but the boot partition is not encrypted.&lt;br/&gt;&lt;br/&gt;There are security concerns with this kind of setup, because important system files are kept on an unencrypted partition.&lt;br/&gt;You may continue if you wish, but filesystem unlocking will happen later during system startup.&lt;br/&gt;To encrypt the boot partition, go back and recreate it, selecting &lt;strong&gt;Encrypt&lt;/strong&gt; in the partition creation window.</source>
      <translation>Se creó una partición de arranque separada junto con una partición raíz cifrada, pero la partición de arranque no está encriptada.&lt;br/&gt;&lt;br/&gt; Existen problemas de seguridad con este tipo de configuración, ya que los archivos importantes del sistema se guardan en una partición no encriptada. &lt;br/&gt;Puede continuar si lo desea, pero el desbloqueo del sistema de archivos ocurrirá más tarde durante el inicio del sistema. &lt;br/&gt;Para encriptar la partición de arranque, retroceda y vuelva a crearla, seleccionando &lt;strong&gt;Encriptar&lt;/strong&gt; en la ventana de creación de la partición.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="608"/>
      <source>has at least one disk device available.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="609"/>
      <source>There are no partitions to install on.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>PlasmaLnfJob</name>
    <message>
      <location filename="../src/modules/plasmalnf/PlasmaLnfJob.cpp" line="33"/>
      <source>Plasma Look-and-Feel Job</source>
      <translation>Trabajo Plasma Look-and-Feel</translation>
    </message>
    <message>
      <location filename="../src/modules/plasmalnf/PlasmaLnfJob.cpp" line="57"/>
      <location filename="../src/modules/plasmalnf/PlasmaLnfJob.cpp" line="58"/>
      <source>Could not select KDE Plasma Look-and-Feel package</source>
      <translation>No se pudo seleccionar el paquete KDE Plasma Look-and-Feel</translation>
    </message>
  </context>
  <context>
    <name>PlasmaLnfPage</name>
    <message>
      <location filename="../src/modules/plasmalnf/page_plasmalnf.ui" line="18"/>
      <source>Form</source>
      <translation>Formulario</translation>
    </message>
    <message>
      <location filename="../src/modules/plasmalnf/PlasmaLnfPage.cpp" line="79"/>
      <source>Please choose a look-and-feel for the KDE Plasma Desktop. You can also skip this step and configure the look-and-feel once the system is set up. Clicking on a look-and-feel selection will give you a live preview of that look-and-feel.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/plasmalnf/PlasmaLnfPage.cpp" line="84"/>
      <source>Please choose a look-and-feel for the KDE Plasma Desktop. You can also skip this step and configure the look-and-feel once the system is installed. Clicking on a look-and-feel selection will give you a live preview of that look-and-feel.</source>
      <translation>Favor seleccione un Escritorio Plasma KDE Look-and-Feel. También puede omitir este paso y configurar el Look-and-Feel una vez el sistema está instalado. Haciendo clic en la selección Look-and-Feel le dará una previsualización en vivo de ese Look-and-Feel.</translation>
    </message>
  </context>
  <context>
    <name>PlasmaLnfViewStep</name>
    <message>
      <location filename="../src/modules/plasmalnf/PlasmaLnfViewStep.cpp" line="43"/>
      <source>Look-and-Feel</source>
      <translation>Look-and-Feel</translation>
    </message>
  </context>
  <context>
    <name>PreserveFiles</name>
    <message>
      <location filename="../src/modules/preservefiles/PreserveFiles.cpp" line="79"/>
      <source>Saving files for later ...</source>
      <translation>Guardando archivos para más tarde ...</translation>
    </message>
    <message>
      <location filename="../src/modules/preservefiles/PreserveFiles.cpp" line="118"/>
      <source>No files configured to save for later.</source>
      <translation>No hay archivos configurados para guardar más tarde.</translation>
    </message>
    <message>
      <location filename="../src/modules/preservefiles/PreserveFiles.cpp" line="172"/>
      <source>Not all of the configured files could be preserved.</source>
      <translation>No todos los archivos configurados podrían conservarse.</translation>
    </message>
  </context>
  <context>
    <name>ProcessResult</name>
    <message>
      <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="429"/>
      <source>
There was no output from the command.</source>
      <translation>
No hubo salida desde el comando.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="430"/>
      <source>
Output:
</source>
      <translation>
Salida
</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="434"/>
      <source>External command crashed.</source>
      <translation>El comando externo ha fallado.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="435"/>
      <source>Command &lt;i&gt;%1&lt;/i&gt; crashed.</source>
      <translation>El comando &lt;i&gt;%1&lt;/i&gt; ha fallado.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="440"/>
      <source>External command failed to start.</source>
      <translation>El comando externo falló al iniciar.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="441"/>
      <source>Command &lt;i&gt;%1&lt;/i&gt; failed to start.</source>
      <translation>El comando &lt;i&gt;%1&lt;/i&gt; Falló al iniciar.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="445"/>
      <source>Internal error when starting command.</source>
      <translation>Error interno al iniciar el comando.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="446"/>
      <source>Bad parameters for process job call.</source>
      <translation>Parámetros erróneos en la llamada al proceso.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="450"/>
      <source>External command failed to finish.</source>
      <translation>Comando externo falla al finalizar</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="451"/>
      <source>Command &lt;i&gt;%1&lt;/i&gt; failed to finish in %2 seconds.</source>
      <translation>Comando &lt;i&gt;%1&lt;/i&gt; falló al finalizar en %2 segundos.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="458"/>
      <source>External command finished with errors.</source>
      <translation>Comando externo finalizado con errores</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="459"/>
      <source>Command &lt;i&gt;%1&lt;/i&gt; finished with exit code %2.</source>
      <translation>Comando &lt;i&gt;%1&lt;/i&gt; finalizó con código de salida %2.</translation>
    </message>
  </context>
  <context>
    <name>QObject</name>
    <message>
      <location filename="../src/libcalamares/locale/Label.cpp" line="29"/>
      <source>%1 (%2)</source>
      <translation>%1 (%2)</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/partition/FileSystem.cpp" line="28"/>
      <source>unknown</source>
      <translation>desconocido</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/partition/FileSystem.cpp" line="30"/>
      <source>extended</source>
      <translation>extendido</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/partition/FileSystem.cpp" line="32"/>
      <source>unformatted</source>
      <translation>no formateado</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/partition/FileSystem.cpp" line="34"/>
      <source>swap</source>
      <translation>swap</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboard/keyboardwidget/keyboardglobal.cpp" line="130"/>
      <location filename="../src/modules/keyboard/keyboardwidget/keyboardglobal.cpp" line="167"/>
      <source>Default</source>
      <translation>Por defecto</translation>
    </message>
    <message>
      <location filename="../src/modules/machineid/Workers.cpp" line="64"/>
      <location filename="../src/modules/machineid/Workers.cpp" line="72"/>
      <location filename="../src/modules/machineid/Workers.cpp" line="76"/>
      <location filename="../src/modules/machineid/Workers.cpp" line="93"/>
      <source>File not found</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/machineid/Workers.cpp" line="65"/>
      <source>Path &lt;pre&gt;%1&lt;/pre&gt; must be an absolute path.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/machineid/MachineIdJob.cpp" line="83"/>
      <source>Directory not found</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/machineid/MachineIdJob.cpp" line="84"/>
      <location filename="../src/modules/machineid/Workers.cpp" line="94"/>
      <source>Could not create new random file &lt;pre&gt;%1&lt;/pre&gt;.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/packagechooser/PackageModel.cpp" line="44"/>
      <source>No product</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/packagechooser/PackageModel.cpp" line="52"/>
      <source>No description provided.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionDialogHelpers.cpp" line="44"/>
      <source>(no mount point)</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="41"/>
      <source>Unpartitioned space or unknown partition table</source>
      <translation>Espacio no particionado o tabla de partición desconocida</translation>
    </message>
  </context>
  <context>
    <name>Recommended</name>
    <message>
      <location filename="../src/modules/welcomeq/Recommended.qml" line="40"/>
      <source>&lt;p&gt;This computer does not satisfy some of the recommended requirements for setting up %1.&lt;br/&gt;
        Setup can continue, but some features might be disabled.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>RemoveUserJob</name>
    <message>
      <location filename="../src/modules/removeuser/RemoveUserJob.cpp" line="34"/>
      <source>Remove live user from target system</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>RemoveVolumeGroupJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="24"/>
      <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="36"/>
      <source>Remove Volume Group named %1.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="30"/>
      <source>Remove Volume Group named &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="48"/>
      <source>The installer failed to remove a volume group named '%1'.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>ReplaceWidget</name>
    <message>
      <location filename="../src/modules/partition/gui/ReplaceWidget.ui" line="18"/>
      <source>Form</source>
      <translation>Formulario</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="127"/>
      <source>Select where to install %1.&lt;br/&gt;&lt;font color="red"&gt;Warning: &lt;/font&gt;this will delete all files on the selected partition.</source>
      <translation>Selecciona donde instalar %1.&lt;br/&gt;&lt;font color="red"&gt;Aviso: &lt;/font&gt;Se borrarán todos los archivos de la partición seleccionada.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="149"/>
      <source>The selected item does not appear to be a valid partition.</source>
      <translation>El elemento seleccionado no parece ser una partición válida.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="157"/>
      <source>%1 cannot be installed on empty space. Please select an existing partition.</source>
      <translation>%1 no se puede instalar en un espacio vacío. Selecciona una partición existente.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="167"/>
      <source>%1 cannot be installed on an extended partition. Please select an existing primary or logical partition.</source>
      <translation>%1 no se puede instalar en una partición extendida. Selecciona una partición primaria o lógica.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="177"/>
      <source>%1 cannot be installed on this partition.</source>
      <translation>No se puede instalar %1 en esta partición.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="183"/>
      <source>Data partition (%1)</source>
      <translation>Partición de datos (%1)</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="203"/>
      <source>Unknown system partition (%1)</source>
      <translation>Partición de sistema desconocida (%1)</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="207"/>
      <source>%1 system partition (%2)</source>
      <translation>%1 partición de sistema (%2)</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="218"/>
      <source>&lt;strong&gt;%4&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;The partition %1 is too small for %2. Please select a partition with capacity at least %3 GiB.</source>
      <translation> &lt;strong&gt;%4&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;La partición %1 es muy pequeña para %2. Selecciona otra partición que tenga al menos %3 GiB.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="240"/>
      <source>&lt;strong&gt;%2&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;An EFI system partition cannot be found anywhere on this system. Please go back and use manual partitioning to set up %1.</source>
      <translation>&lt;strong&gt;%2&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;No se puede encontrar una partición EFI en este sistema. Por favor vuelva atrás y use el particionamiento manual para configurar %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="251"/>
      <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="267"/>
      <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="292"/>
      <source>&lt;strong&gt;%3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;%1 will be installed on %2.&lt;br/&gt;&lt;font color="red"&gt;Warning: &lt;/font&gt;all data on partition %2 will be lost.</source>
      <translation>&lt;strong&gt;%3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;%1 sera instalado en %2.&lt;br/&gt;&lt;font color="red"&gt;Advertencia: &lt;/font&gt;toda la información en la partición %2 se perdera.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="259"/>
      <source>The EFI system partition at %1 will be used for starting %2.</source>
      <translation>La partición EFI en %1 será usada para iniciar %2.
</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="275"/>
      <source>EFI system partition:</source>
      <translation>Partición de sistema EFI:</translation>
    </message>
  </context>
  <context>
    <name>Requirements</name>
    <message>
      <location filename="../src/modules/welcomeq/Requirements.qml" line="38"/>
      <source>&lt;p&gt;This computer does not satisfy the minimum requirements for installing %1.&lt;br/&gt;
        Installation cannot continue.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcomeq/Requirements.qml" line="40"/>
      <source>&lt;p&gt;This computer does not satisfy some of the recommended requirements for setting up %1.&lt;br/&gt;
        Setup can continue, but some features might be disabled.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>ResizeFSJob</name>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="46"/>
      <source>Resize Filesystem Job</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="169"/>
      <source>Invalid configuration</source>
      <translation>Configuración inválida</translation>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="170"/>
      <source>The file-system resize job has an invalid configuration and will not run.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="175"/>
      <source>KPMCore not Available</source>
      <translation>KPMCore no está disponible</translation>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="176"/>
      <source>Calamares cannot start KPMCore for the file-system resize job.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="184"/>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="193"/>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="204"/>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="213"/>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="231"/>
      <source>Resize Failed</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="186"/>
      <source>The filesystem %1 could not be found in this system, and cannot be resized.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="187"/>
      <source>The device %1 could not be found in this system, and cannot be resized.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="195"/>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="206"/>
      <source>The filesystem %1 cannot be resized.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="196"/>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="207"/>
      <source>The device %1 cannot be resized.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="214"/>
      <source>The filesystem %1 must be resized, but cannot.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="215"/>
      <source>The device %1 must be resized, but cannot</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>ResizePartitionJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="40"/>
      <source>Resize partition %1.</source>
      <translation>Redimensionar partición %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="47"/>
      <source>Resize &lt;strong&gt;%2MiB&lt;/strong&gt; partition &lt;strong&gt;%1&lt;/strong&gt; to &lt;strong&gt;%3MiB&lt;/strong&gt;.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="58"/>
      <source>Resizing %2MiB partition %1 to %3MiB.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="77"/>
      <source>The installer failed to resize partition %1 on disk '%2'.</source>
      <translation>El instalador ha fallado al reducir la partición %1 en el disco '%2'.</translation>
    </message>
  </context>
  <context>
    <name>ResizeVolumeGroupDialog</name>
    <message>
      <location filename="../src/modules/partition/gui/ResizeVolumeGroupDialog.cpp" line="30"/>
      <source>Resize Volume Group</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>ResizeVolumeGroupJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="27"/>
      <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="45"/>
      <source>Resize volume group named %1 from %2 to %3.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="36"/>
      <source>Resize volume group named &lt;strong&gt;%1&lt;/strong&gt; from &lt;strong&gt;%2&lt;/strong&gt; to &lt;strong&gt;%3&lt;/strong&gt;.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="60"/>
      <source>The installer failed to resize a volume group named '%1'.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>ResultsListDialog</name>
    <message>
      <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="138"/>
      <source>For best results, please ensure that this computer:</source>
      <translation>Para mejores resultados, por favor verifique que esta computadora:</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="139"/>
      <source>System requirements</source>
      <translation>Requisitos de sistema</translation>
    </message>
  </context>
  <context>
    <name>ResultsListWidget</name>
    <message>
      <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="263"/>
      <source>This computer does not satisfy the minimum requirements for setting up %1.&lt;br/&gt;Setup cannot continue. &lt;a href="#details"&gt;Details...&lt;/a&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="267"/>
      <source>This computer does not satisfy the minimum requirements for installing %1.&lt;br/&gt;Installation cannot continue. &lt;a href="#details"&gt;Details...&lt;/a&gt;</source>
      <translation> Este equipo no cumple los requisitos mínimos para la instalación. %1.&lt;br/&gt;La instalación no puede continuar. &lt;a href="#details"&gt;Detalles...&lt;/a&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="274"/>
      <source>This computer does not satisfy some of the recommended requirements for setting up %1.&lt;br/&gt;Setup can continue, but some features might be disabled.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="278"/>
      <source>This computer does not satisfy some of the recommended requirements for installing %1.&lt;br/&gt;Installation can continue, but some features might be disabled.</source>
      <translation> Este equipo no cumple alguno de los requisitos recomendados para la instalación %1.&lt;br/&gt;La instalación puede continuar, pero algunas funcionalidades podrían ser deshabilitadas.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="287"/>
      <source>This program will ask you some questions and set up %2 on your computer.</source>
      <translation> El programa le hará algunas preguntas y configurará %2 en su ordenador.</translation>
    </message>
  </context>
  <context>
    <name>ScanningDialog</name>
    <message>
      <location filename="../src/modules/partition/gui/ScanningDialog.cpp" line="64"/>
      <source>Scanning storage devices...</source>
      <translation>Escaneando dispositivos de almacenamiento...</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ScanningDialog.cpp" line="64"/>
      <source>Partitioning</source>
      <translation>Particionando</translation>
    </message>
  </context>
  <context>
    <name>SetHostNameJob</name>
    <message>
      <location filename="../src/modules/users/SetHostNameJob.cpp" line="37"/>
      <source>Set hostname %1</source>
      <translation>Hostname: %1</translation>
    </message>
    <message>
      <location filename="../src/modules/users/SetHostNameJob.cpp" line="44"/>
      <source>Set hostname &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <translation>Establecer nombre del equipo &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/SetHostNameJob.cpp" line="51"/>
      <source>Setting hostname %1.</source>
      <translation>Configurando nombre de host %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/SetHostNameJob.cpp" line="122"/>
      <location filename="../src/modules/users/SetHostNameJob.cpp" line="129"/>
      <source>Internal Error</source>
      <translation>Error interno</translation>
    </message>
    <message>
      <location filename="../src/modules/users/SetHostNameJob.cpp" line="137"/>
      <location filename="../src/modules/users/SetHostNameJob.cpp" line="146"/>
      <source>Cannot write hostname to target system</source>
      <translation>No es posible escribir el hostname en el sistema de destino</translation>
    </message>
  </context>
  <context>
    <name>SetKeyboardLayoutJob</name>
    <message>
      <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="55"/>
      <source>Set keyboard model to %1, layout to %2-%3</source>
      <translation>Establecer el modelo de teclado %1, a una disposición %2-%3</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="368"/>
      <source>Failed to write keyboard configuration for the virtual console.</source>
      <translation>No se ha podido guardar la configuración de teclado para la consola virtual.</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="369"/>
      <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="397"/>
      <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="414"/>
      <source>Failed to write to %1</source>
      <translation>No se ha podido escribir en %1</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="396"/>
      <source>Failed to write keyboard configuration for X11.</source>
      <translation>No se ha podido guardar la configuración del teclado de X11.</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="413"/>
      <source>Failed to write keyboard configuration to existing /etc/default directory.</source>
      <translation>Fallo al escribir la configuración del teclado en el directorio /etc/default existente.</translation>
    </message>
  </context>
  <context>
    <name>SetPartFlagsJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="43"/>
      <source>Set flags on partition %1.</source>
      <translation>Establecer indicadores en la partición %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="49"/>
      <source>Set flags on %1MiB %2 partition.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="53"/>
      <source>Set flags on new partition.</source>
      <translation>Establecer indicadores en la nueva partición.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="65"/>
      <source>Clear flags on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <translation>Borrar indicadores en la partición &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="71"/>
      <source>Clear flags on %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="75"/>
      <source>Clear flags on new partition.</source>
      <translation>Borrar indicadores en la nueva partición.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="80"/>
      <source>Flag partition &lt;strong&gt;%1&lt;/strong&gt; as &lt;strong&gt;%2&lt;/strong&gt;.</source>
      <translation>Indicador de partición &lt;strong&gt;%1&lt;/strong&gt; como &lt;strong&gt;%2&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="89"/>
      <source>Flag %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition as &lt;strong&gt;%3&lt;/strong&gt;.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="96"/>
      <source>Flag new partition as &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <translation>Marcar la nueva partición como &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="108"/>
      <source>Clearing flags on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <translation>Borrar indicadores en la partición &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="114"/>
      <source>Clearing flags on %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="119"/>
      <source>Clearing flags on new partition.</source>
      <translation>Borrar indicadores en la nueva partición.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="124"/>
      <source>Setting flags &lt;strong&gt;%2&lt;/strong&gt; on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <translation>Establecer indicadores &lt;strong&gt;%2&lt;/strong&gt; en la partición &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="133"/>
      <source>Setting flags &lt;strong&gt;%3&lt;/strong&gt; on %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="140"/>
      <source>Setting flags &lt;strong&gt;%1&lt;/strong&gt; on new partition.</source>
      <translation>Establecer indicadores &lt;strong&gt;%1&lt;/strong&gt; en nueva partición.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="157"/>
      <source>The installer failed to set flags on partition %1.</source>
      <translation>El instalador no pudo establecer indicadores en la partición %1.</translation>
    </message>
  </context>
  <context>
    <name>SetPasswordJob</name>
    <message>
      <location filename="../src/modules/users/SetPasswordJob.cpp" line="40"/>
      <source>Set password for user %1</source>
      <translation>Definir contraseña para el usuario %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/SetPasswordJob.cpp" line="47"/>
      <source>Setting password for user %1.</source>
      <translation>Configurando contraseña para el usuario %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/SetPasswordJob.cpp" line="81"/>
      <source>Bad destination system path.</source>
      <translation>Destino erróneo del sistema.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/SetPasswordJob.cpp" line="82"/>
      <source>rootMountPoint is %1</source>
      <translation>El punto de montaje de root es %1</translation>
    </message>
    <message>
      <location filename="../src/modules/users/SetPasswordJob.cpp" line="88"/>
      <source>Cannot disable root account.</source>
      <translation>No se puede deshabilitar la cuenta root.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/SetPasswordJob.cpp" line="89"/>
      <source>passwd terminated with error code %1.</source>
      <translation>Contraseña terminada con un error de código %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/SetPasswordJob.cpp" line="97"/>
      <source>Cannot set password for user %1.</source>
      <translation>No se puede definir contraseña para el usuario %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/SetPasswordJob.cpp" line="98"/>
      <source>usermod terminated with error code %1.</source>
      <translation>usermod ha terminado con el código de error %1</translation>
    </message>
  </context>
  <context>
    <name>SetTimezoneJob</name>
    <message>
      <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="34"/>
      <source>Set timezone to %1/%2</source>
      <translation>Configurar zona horaria a %1/%2</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="62"/>
      <source>Cannot access selected timezone path.</source>
      <translation>No se puede acceder a la ruta de la zona horaria.</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="63"/>
      <source>Bad path: %1</source>
      <translation>Ruta errónea: %1</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="71"/>
      <source>Cannot set timezone.</source>
      <translation>No se puede definir la zona horaria</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="72"/>
      <source>Link creation failed, target: %1; link name: %2</source>
      <translation>Fallo al crear el enlace, destino: %1; nombre del enlace: %2</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="77"/>
      <source>Cannot set timezone,</source>
      <translation>No se puede establer la zona horaria.</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="78"/>
      <source>Cannot open /etc/timezone for writing</source>
      <translation>No se puede abrir /etc/timezone para escritura</translation>
    </message>
  </context>
  <context>
    <name>SetupGroupsJob</name>
    <message>
      <location filename="../src/modules/users/MiscJobs.cpp" line="166"/>
      <source>Preparing groups.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/MiscJobs.cpp" line="178"/>
      <location filename="../src/modules/users/MiscJobs.cpp" line="183"/>
      <source>Could not create groups in target system</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/MiscJobs.cpp" line="184"/>
      <source>These groups are missing in the target system: %1</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>SetupSudoJob</name>
    <message>
      <location filename="../src/modules/users/MiscJobs.cpp" line="33"/>
      <source>Configure &lt;pre&gt;sudo&lt;/pre&gt; users.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/MiscJobs.cpp" line="55"/>
      <source>Cannot chmod sudoers file.</source>
      <translation>No se puede aplicar chmod al archivo sudoers.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/MiscJobs.cpp" line="60"/>
      <source>Cannot create sudoers file for writing.</source>
      <translation>No se puede crear el archivo sudoers para editarlo. </translation>
    </message>
  </context>
  <context>
    <name>ShellProcessJob</name>
    <message>
      <location filename="../src/modules/shellprocess/ShellProcessJob.cpp" line="41"/>
      <source>Shell Processes Job</source>
      <translation>Trabajo de procesos Shell</translation>
    </message>
  </context>
  <context>
    <name>SlideCounter</name>
    <message>
      <location filename="../src/qml/calamares/slideshow/SlideCounter.qml" line="27"/>
      <source>%L1 / %L2</source>
      <extracomment>slide counter, %1 of %2 (numeric)</extracomment>
      <translation>%L1 / %L2</translation>
    </message>
  </context>
  <context>
    <name>SummaryPage</name>
    <message>
      <location filename="../src/modules/summary/SummaryPage.cpp" line="49"/>
      <source>This is an overview of what will happen once you start the setup procedure.</source>
      <translation>Esta es una descripción general de lo que sucederá una vez que comience el procedimiento de configuración.</translation>
    </message>
    <message>
      <location filename="../src/modules/summary/SummaryPage.cpp" line="51"/>
      <source>This is an overview of what will happen once you start the install procedure.</source>
      <translation>Esto es un resumen de lo que pasará una vez que inicie el procedimiento de instalación.</translation>
    </message>
  </context>
  <context>
    <name>SummaryViewStep</name>
    <message>
      <location filename="../src/modules/summary/SummaryViewStep.cpp" line="36"/>
      <source>Summary</source>
      <translation>Resumen</translation>
    </message>
  </context>
  <context>
    <name>TrackingInstallJob</name>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="37"/>
      <source>Installation feedback</source>
      <translation>Retroalimentacion de la instalación</translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="43"/>
      <source>Sending installation feedback.</source>
      <translation>Envío de retroalimentación de instalación.</translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="60"/>
      <source>Internal error in install-tracking.</source>
      <translation>Error interno en el seguimiento de instalación.</translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="61"/>
      <source>HTTP request timed out.</source>
      <translation>Tiempo de espera en la solicitud HTTP agotado.</translation>
    </message>
  </context>
  <context>
    <name>TrackingKUserFeedbackJob</name>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="122"/>
      <source>KDE user feedback</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="128"/>
      <source>Configuring KDE user feedback.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="150"/>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="156"/>
      <source>Error in KDE user feedback configuration.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="151"/>
      <source>Could not configure KDE user feedback correctly, script error %1.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="157"/>
      <source>Could not configure KDE user feedback correctly, Calamares error %1.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>TrackingMachineUpdateManagerJob</name>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="71"/>
      <source>Machine feedback</source>
      <translation>Retroalimentación de la maquina</translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="77"/>
      <source>Configuring machine feedback.</source>
      <translation>Configurando la retroalimentación de la maquina.</translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="100"/>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="106"/>
      <source>Error in machine feedback configuration.</source>
      <translation>Error en la configuración de retroalimentación de la máquina.</translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="101"/>
      <source>Could not configure machine feedback correctly, script error %1.</source>
      <translation>No se pudo configurar correctamente la retroalimentación de la máquina, error de script %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="107"/>
      <source>Could not configure machine feedback correctly, Calamares error %1.</source>
      <translation>No se pudo configurar la retroalimentación de la máquina correctamente, Calamares error %1.</translation>
    </message>
  </context>
  <context>
    <name>TrackingPage</name>
    <message>
      <location filename="../src/modules/tracking/page_trackingstep.ui" line="18"/>
      <source>Form</source>
      <translation>Formulario</translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/page_trackingstep.ui" line="28"/>
      <source>Placeholder</source>
      <translation>Marcador de posición</translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/page_trackingstep.ui" line="76"/>
      <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Click here to send &lt;span style=" font-weight:600;"&gt;no information at all&lt;/span&gt; about your installation.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/tracking/page_trackingstep.ui" line="275"/>
      <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;a href="placeholder"&gt;&lt;span style=" text-decoration: underline; color:#2980b9;"&gt;Click here for more information about user feedback&lt;/span&gt;&lt;/a&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
      <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;a href="placeholder"&gt;&lt;span style=" text-decoration: underline; color:#2980b9;"&gt;Haga clic aquí para más información acerca de comentarios del usuario&lt;/span&gt;&lt;/a&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingPage.cpp" line="86"/>
      <source>Tracking helps %1 to see how often it is installed, what hardware it is installed on and which applications are used. To see what will be sent, please click the help icon next to each area.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingPage.cpp" line="91"/>
      <source>By selecting this you will send information about your installation and hardware. This information will only be sent &lt;b&gt;once&lt;/b&gt; after the installation finishes.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingPage.cpp" line="94"/>
      <source>By selecting this you will periodically send information about your &lt;b&gt;machine&lt;/b&gt; installation, hardware and applications, to %1.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingPage.cpp" line="98"/>
      <source>By selecting this you will regularly send information about your &lt;b&gt;user&lt;/b&gt; installation, hardware, applications and application usage patterns, to %1.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>TrackingViewStep</name>
    <message>
      <location filename="../src/modules/tracking/TrackingViewStep.cpp" line="49"/>
      <source>Feedback</source>
      <translation>Retroalimentación</translation>
    </message>
  </context>
  <context>
    <name>UsersPage</name>
    <message>
      <location filename="../src/modules/users/UsersPage.cpp" line="167"/>
      <source>&lt;small&gt;If more than one person will use this computer, you can create multiple accounts after setup.&lt;/small&gt;</source>
      <translation>&lt;small&gt;Si más de una persona usará esta computadora, puede crear múltiples cuentas después de la configuración&lt;/small&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/users/UsersPage.cpp" line="173"/>
      <source>&lt;small&gt;If more than one person will use this computer, you can create multiple accounts after installation.&lt;/small&gt;</source>
      <translation>&lt;small&gt;Si más de una persona usará esta computadora, puede crear varias cuentas después de la instalación.&lt;/small&gt;</translation>
    </message>
  </context>
  <context>
    <name>UsersQmlViewStep</name>
    <message>
      <location filename="../src/modules/usersq/UsersQmlViewStep.cpp" line="35"/>
      <source>Users</source>
      <translation>Usuarios</translation>
    </message>
  </context>
  <context>
    <name>UsersViewStep</name>
    <message>
      <location filename="../src/modules/users/UsersViewStep.cpp" line="48"/>
      <source>Users</source>
      <translation>Usuarios</translation>
    </message>
  </context>
  <context>
    <name>VariantModel</name>
    <message>
      <location filename="../src/calamares/VariantModel.cpp" line="232"/>
      <source>Key</source>
      <comment>Column header for key/value</comment>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/calamares/VariantModel.cpp" line="236"/>
      <source>Value</source>
      <comment>Column header for key/value</comment>
      <translation>Valor</translation>
    </message>
  </context>
  <context>
    <name>VolumeGroupBaseDialog</name>
    <message>
      <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="18"/>
      <source>Create Volume Group</source>
      <translation>Crear Grupo de Volumen</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="24"/>
      <source>List of Physical Volumes</source>
      <translation>Lista de volúmenes físicos</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="34"/>
      <source>Volume Group Name:</source>
      <translation>Nombre de Grupo de volumen:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="47"/>
      <source>Volume Group Type:</source>
      <translation>Tipo de Grupo de volumen:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="60"/>
      <source>Physical Extent Size:</source>
      <translation>Tamaño de la extensión física:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="70"/>
      <source> MiB</source>
      <translation> MiB</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="86"/>
      <source>Total Size:</source>
      <translation>Tamaño total:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="106"/>
      <source>Used Size:</source>
      <translation>Tamaño usado:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="126"/>
      <source>Total Sectors:</source>
      <translation>Total de Sectores:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="146"/>
      <source>Quantity of LVs:</source>
      <translation>Cantidad de LVs:</translation>
    </message>
  </context>
  <context>
    <name>WelcomePage</name>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.ui" line="18"/>
      <source>Form</source>
      <translation>Formulario</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.ui" line="79"/>
      <location filename="../src/modules/welcome/WelcomePage.ui" line="98"/>
      <source>Select application and system language</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.ui" line="140"/>
      <source>&amp;About</source>
      <translation>&amp;Acerca de</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.ui" line="150"/>
      <source>Open donations website</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.ui" line="153"/>
      <source>&amp;Donate</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.ui" line="163"/>
      <source>Open help and support website</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.ui" line="166"/>
      <source>&amp;Support</source>
      <translation>&amp;Soporte</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.ui" line="176"/>
      <source>Open issues and bug-tracking website</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.ui" line="179"/>
      <source>&amp;Known issues</source>
      <translation>&amp;Problemas Conocidos</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.ui" line="189"/>
      <source>Open release notes website</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.ui" line="192"/>
      <source>&amp;Release notes</source>
      <translation>&amp;Notas de lanzamiento</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.cpp" line="216"/>
      <source>&lt;h1&gt;Welcome to the Calamares setup program for %1.&lt;/h1&gt;</source>
      <translation>&lt;h1&gt;Bienvenido al programa de instalación Calamares para %1.&lt;/h1&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.cpp" line="217"/>
      <source>&lt;h1&gt;Welcome to %1 setup.&lt;/h1&gt;</source>
      <translation>&lt;h1&gt;Bienvenido a la configuración %1&lt;/h1&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.cpp" line="222"/>
      <source>&lt;h1&gt;Welcome to the Calamares installer for %1.&lt;/h1&gt;</source>
      <translation>&lt;h1&gt;Bienvenido al instalador Calamares para %1.&lt;/h1&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.cpp" line="223"/>
      <source>&lt;h1&gt;Welcome to the %1 installer.&lt;/h1&gt;</source>
      <translation>&lt;h1&gt;Bienvenido al instalador de %1.&lt;/h1&gt; </translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.cpp" line="228"/>
      <source>%1 support</source>
      <translation>%1 Soporte</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.cpp" line="235"/>
      <source>About %1 setup</source>
      <translation>Acerca de la configuración %1</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.cpp" line="235"/>
      <source>About %1 installer</source>
      <translation>Acerca del instalador %1</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.cpp" line="238"/>
      <source>&lt;h1&gt;%1&lt;/h1&gt;&lt;br/&gt;&lt;strong&gt;%2&lt;br/&gt;for %3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;Copyright 2014-2017 Teo Mrnjavac &amp;lt;teo@kde.org&amp;gt;&lt;br/&gt;Copyright 2017-2020 Adriaan de Groot &amp;lt;groot@kde.org&amp;gt;&lt;br/&gt;Thanks to &lt;a href="https://calamares.io/team/"&gt;the Calamares team&lt;/a&gt; and the &lt;a href="https://www.transifex.com/calamares/calamares/"&gt;Calamares translators team&lt;/a&gt;.&lt;br/&gt;&lt;br/&gt;&lt;a href="https://calamares.io/"&gt;Calamares&lt;/a&gt; development is sponsored by &lt;br/&gt;&lt;a href="http://www.blue-systems.com/"&gt;Blue Systems&lt;/a&gt; - Liberating Software.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>WelcomeQmlViewStep</name>
    <message>
      <location filename="../src/modules/welcomeq/WelcomeQmlViewStep.cpp" line="41"/>
      <source>Welcome</source>
      <translation>Bienvenido</translation>
    </message>
  </context>
  <context>
    <name>WelcomeViewStep</name>
    <message>
      <location filename="../src/modules/welcome/WelcomeViewStep.cpp" line="48"/>
      <source>Welcome</source>
      <translation>Bienvenido</translation>
    </message>
  </context>
  <context>
    <name>about</name>
    <message>
      <location filename="../src/modules/welcomeq/about.qml" line="47"/>
      <source>&lt;h1&gt;%1&lt;/h1&gt;&lt;br/&gt;
                        &lt;strong&gt;%2&lt;br/&gt;
                        for %3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;
                        Copyright 2014-2017 Teo Mrnjavac &amp;lt;teo@kde.org&amp;gt;&lt;br/&gt;
                        Copyright 2017-2020 Adriaan de Groot &amp;lt;groot@kde.org&amp;gt;&lt;br/&gt;
                        Thanks to &lt;a href='https://calamares.io/team/'&gt;the Calamares team&lt;/a&gt;
                        and the &lt;a href='https://www.transifex.com/calamares/calamares/'&gt;Calamares
                        translators team&lt;/a&gt;.&lt;br/&gt;&lt;br/&gt;
                        &lt;a href='https://calamares.io/'&gt;Calamares&lt;/a&gt;
                        development is sponsored by &lt;br/&gt;
                        &lt;a href='http://www.blue-systems.com/'&gt;Blue Systems&lt;/a&gt; -
                        Liberating Software.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcomeq/about.qml" line="96"/>
      <source>Back</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>calamares-sidebar</name>
    <message>
      <location filename="../src/calamares/calamares-sidebar.qml" line="79"/>
      <source>Show debug information</source>
      <translation>Mostrar información de depuración</translation>
    </message>
  </context>
  <context>
    <name>finishedq</name>
    <message>
      <location filename="../src/modules/finishedq/finishedq.qml" line="36"/>
      <source>Installation Completed</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/finishedq/finishedq.qml" line="43"/>
      <source>%1 has been installed on your computer.&lt;br/&gt;
            You may now restart into your new system, or continue using the Live environment.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/finishedq/finishedq.qml" line="65"/>
      <source>Close Installer</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/finishedq/finishedq.qml" line="71"/>
      <source>Restart System</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/finishedq/finishedq.qml" line="89"/>
      <source>&lt;p&gt;A full log of the install is available as installation.log in the home directory of the Live user.&lt;br/&gt;
            This log is copied to /var/log/installation.log of the target system.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>i18n</name>
    <message>
      <location filename="../src/modules/localeq/i18n.qml" line="46"/>
      <source>&lt;h1&gt;Languages&lt;/h1&gt; &lt;/br&gt;
                    The system locale setting affects the language and character set for some command line user interface elements. The current setting is &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/localeq/i18n.qml" line="106"/>
      <source>&lt;h1&gt;Locales&lt;/h1&gt; &lt;/br&gt;
                    The system locale setting affects the numbers and dates format. The current setting is &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/localeq/i18n.qml" line="158"/>
      <source>Back</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>keyboardq</name>
    <message>
      <location filename="../src/modules/keyboardq/keyboardq.qml" line="45"/>
      <source>Keyboard Model</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/keyboardq/keyboardq.qml" line="377"/>
      <source>Layouts</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/keyboardq/keyboardq.qml" line="148"/>
      <source>Keyboard Layout</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/keyboardq/keyboardq.qml" line="60"/>
      <source>Click your preferred keyboard model to select layout and variant, or use the default one based on the detected hardware.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/keyboardq/keyboardq.qml" line="253"/>
      <source>Models</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/keyboardq/keyboardq.qml" line="260"/>
      <source>Variants</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/keyboardq/keyboardq.qml" line="276"/>
      <source>Keyboard Variant</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/keyboardq/keyboardq.qml" line="386"/>
      <source>Test your keyboard</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>localeq</name>
    <message>
      <location filename="../src/modules/localeq/localeq.qml" line="81"/>
      <source>Change</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>notesqml</name>
    <message>
      <location filename="../src/modules/notesqml/notesqml.qml" line="50"/>
      <source>&lt;h3&gt;%1&lt;/h3&gt;
            &lt;p&gt;These are example release notes.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>release_notes</name>
    <message>
      <location filename="../src/modules/welcomeq/release_notes.qml" line="45"/>
      <source>&lt;h3&gt;%1&lt;/h3&gt;
            &lt;p&gt;This an example QML file, showing options in RichText with Flickable content.&lt;/p&gt;

            &lt;p&gt;QML with RichText can use HTML tags, Flickable content is useful for touchscreens.&lt;/p&gt;

            &lt;p&gt;&lt;b&gt;This is bold text&lt;/b&gt;&lt;/p&gt;
            &lt;p&gt;&lt;i&gt;This is italic text&lt;/i&gt;&lt;/p&gt;
            &lt;p&gt;&lt;u&gt;This is underlined text&lt;/u&gt;&lt;/p&gt;
            &lt;p&gt;&lt;center&gt;This text will be center-aligned.&lt;/center&gt;&lt;/p&gt;
            &lt;p&gt;&lt;s&gt;This is strikethrough&lt;/s&gt;&lt;/p&gt;

            &lt;p&gt;Code example:
            &lt;code&gt;ls -l /home&lt;/code&gt;&lt;/p&gt;

            &lt;p&gt;&lt;b&gt;Lists:&lt;/b&gt;&lt;/p&gt;
            &lt;ul&gt;
                &lt;li&gt;Intel CPU systems&lt;/li&gt;
                &lt;li&gt;AMD CPU systems&lt;/li&gt;
            &lt;/ul&gt;

            &lt;p&gt;The vertical scrollbar is adjustable, current width set to 10.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcomeq/release_notes.qml" line="76"/>
      <source>Back</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>usersq</name>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="36"/>
      <source>Pick your user name and credentials to login and perform admin tasks</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="49"/>
      <source>What is your name?</source>
      <translation>¿Cuál es su nombre?</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="56"/>
      <source>Your Full Name</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="71"/>
      <source>What name do you want to use to log in?</source>
      <translation>¿Qué nombre desea usar para acceder al sistema?</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="78"/>
      <source>Login Name</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="98"/>
      <source>If more than one person will use this computer, you can create multiple accounts after installation.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="110"/>
      <source>Only lowercase letters, numbers, underscore and hyphen are allowed.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="118"/>
      <source>root is not allowed as username.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="127"/>
      <source>What is the name of this computer?</source>
      <translation>¿Cuál es el nombre de esta computadora?</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="133"/>
      <source>Computer Name</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="154"/>
      <source>This name will be used if you make the computer visible to others on a network.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="166"/>
      <source>Only letter, numbers, underscore and hyphen are allowed, minimal of two characters.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="174"/>
      <source>localhost is not allowed as hostname.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="183"/>
      <source>Choose a password to keep your account safe.</source>
      <translation>Seleccione una contraseña para mantener segura su cuenta.</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="193"/>
      <source>Password</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="208"/>
      <source>Repeat Password</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="232"/>
      <source>Enter the same password twice, so that it can be checked for typing errors. A good password will contain a mixture of letters, numbers and punctuation, should be at least eight characters long, and should be changed at regular intervals.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="373"/>
      <source>Validate passwords quality</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="383"/>
      <source>When this box is checked, password-strength checking is done and you will not be able to use a weak password.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="365"/>
      <source>Log in automatically without asking for the password</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="264"/>
      <source>Reuse user password as root password</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="272"/>
      <source>Use the same password for the administrator account.</source>
      <translation>Usar la misma contraseña para la cuenta de administrador.</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="285"/>
      <source>Choose a root password to keep your account safe.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="295"/>
      <source>Root Password</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="311"/>
      <source>Repeat Root Password</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="335"/>
      <source>Enter the same password twice, so that it can be checked for typing errors.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>welcomeq</name>
    <message>
      <location filename="../src/modules/welcomeq/welcomeq.qml" line="35"/>
      <source>&lt;h3&gt;Welcome to the %1 &lt;quote&gt;%2&lt;/quote&gt; installer&lt;/h3&gt;
            &lt;p&gt;This program will ask you some questions and set up %1 on your computer.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcomeq/welcomeq.qml" line="66"/>
      <source>About</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcomeq/welcomeq.qml" line="80"/>
      <source>Support</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcomeq/welcomeq.qml" line="91"/>
      <source>Known issues</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcomeq/welcomeq.qml" line="102"/>
      <source>Release notes</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcomeq/welcomeq.qml" line="114"/>
      <source>Donate</source>
      <translation type="unfinished"/>
    </message>
  </context>
</TS>
