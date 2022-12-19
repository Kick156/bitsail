import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as s,a as e,b as t,d as a,w as d,e as i,r as o}from"./app.e33b7269.js";const c={},f=e("h1",{id:"ftp-sftp-connector",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ftp-sftp-connector","aria-hidden":"true"},"#"),t(" FTP/SFTP connector")],-1),p=i(`<h2 id="main-functionalities" tabindex="-1"><a class="header-anchor" href="#main-functionalities" aria-hidden="true">#</a> Main functionalities</h2><p>This connector can be used to read files from FTP/SFTP servers in batch scenarios. Its functionalities mainly include:</p><ul><li>Support reading files in multiple directories</li><li>Support reading files of various formats</li></ul><h2 id="maven-dependency" tabindex="-1"><a class="header-anchor" href="#maven-dependency" aria-hidden="true">#</a> Maven dependency</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
   &lt;groupId&gt;com.bytedance.bitsail&lt;/groupId&gt;
   &lt;artifactId&gt;connector-ftp&lt;/artifactId&gt;
   &lt;version&gt;\${revision}&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="supported-data-types" tabindex="-1"><a class="header-anchor" href="#supported-data-types" aria-hidden="true">#</a> Supported data types</h2><ul><li>Basic data types supported: <ul><li>Integer type: <ul><li>tinyint</li><li>smallint</li><li>int</li><li>bigint</li></ul></li><li>Float type: <ul><li>float</li><li>double</li><li>decimal</li></ul></li><li>Time type: <ul><li>timestamp</li><li>date</li></ul></li><li>String type: <ul><li>string</li><li>varchar</li><li>char</li></ul></li><li>Bool type: <ul><li>boolean</li></ul></li><li>Binary type: <ul><li>binary</li></ul></li></ul></li><li>Composited data types supported: <ul><li>map</li><li>array</li></ul></li></ul><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2>`,8),h=e("code",null,"job.reader",-1),u=i('<h3 id="necessary-parameters" tabindex="-1"><a class="header-anchor" href="#necessary-parameters" aria-hidden="true">#</a> Necessary parameters</h3><table><thead><tr><th style="text-align:left;">Param name</th><th style="text-align:left;">Required</th><th style="text-align:left;">Optional value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">class</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">Class name of connector,<code>com.bytedance.bitsail.connector.ftp.source.FtpSource</code></td></tr><tr><td style="text-align:left;">path_list</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">Specifies the path of the read in file. Multiple paths can be specified, separated by <code>&#39;,&#39;</code></td></tr><tr><td style="text-align:left;">content_type</td><td style="text-align:left;">Yes</td><td style="text-align:left;">JSON/CSV</td><td style="text-align:left;">Specify the format of the read in file. For details, refer to <a href="#jump_format">Supported formats</a></td></tr><tr><td style="text-align:left;">columns</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">Describing fields&#39; names and types</td></tr><tr><td style="text-align:left;">port</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">Server port，normally FTP is 21, SFTP is 22</td></tr><tr><td style="text-align:left;">host</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">Server host</td></tr><tr><td style="text-align:left;">user</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">Username</td></tr><tr><td style="text-align:left;">password</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">Password</td></tr><tr><td style="text-align:left;">protocol</td><td style="text-align:left;">Yes</td><td style="text-align:left;">FTP/SFTP</td><td style="text-align:left;">Protocol</td></tr><tr><td style="text-align:left;">success_file_path</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">Path to SUCCESS tag file</td></tr></tbody></table><h3 id="optional-parameters" tabindex="-1"><a class="header-anchor" href="#optional-parameters" aria-hidden="true">#</a> Optional parameters</h3><table><thead><tr><th style="text-align:left;">Param name</th><th style="text-align:left;">Required</th><th style="text-align:left;">Default value</th><th>Optional value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">connect_pattern</td><td style="text-align:left;">No</td><td style="text-align:left;">PASV if FTP, NULL if SFTP</td><td>PASV/PORT/NULL</td><td style="text-align:left;">In ftp mode, connect pattern can be PASV or PORT. In sftp mode, connect pattern is NULL</td></tr><tr><td style="text-align:left;">time_out</td><td style="text-align:left;">No</td><td style="text-align:left;">5000ms</td><td></td><td style="text-align:left;">Connection timeout</td></tr><tr><td style="text-align:left;">enable_success_file_check</td><td style="text-align:left;">No</td><td style="text-align:left;">True</td><td></td><td style="text-align:left;">Enabled by default, the job will not start if SUCCESS tag doesn&#39;t exist</td></tr><tr><td style="text-align:left;">max_retry_time</td><td style="text-align:left;">No</td><td style="text-align:left;">60</td><td></td><td style="text-align:left;">Max time to check for SUCCESS tag file</td></tr><tr><td style="text-align:left;">retry_interval_ms</td><td style="text-align:left;">No</td><td style="text-align:left;">60s</td><td></td><td style="text-align:left;">Retry interval to check for SUCCESS tag file</td></tr></tbody></table><h2 id="supported-formats" tabindex="-1"><a class="header-anchor" href="#supported-formats" aria-hidden="true">#</a> <span id="jump_format">Supported formats</span></h2><p>Support the following formats(configured by <code>content_type</code>):</p><ul><li><a href="#jump_json">JSON</a></li><li><a href="#jump_csv">CSV</a></li></ul><h3 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> <span id="jump_json">JSON</span></h3><p>It supports parsing text files in json format. Each line is required to be a standard json string.</p><p>The following parameters are supported to adjust the json parsing stype:</p><table><thead><tr><th>Parameter name</th><th>Default value</th><th>Description</th></tr></thead><tbody><tr><td><code>job.reader.case_insensitive</code></td><td>false</td><td>Whether to be sensitive to the case of the key in the json field</td></tr><tr><td><code>job.reader.convert_error_column_as_null</code></td><td>false</td><td>Whether to set the field with parsing error to null</td></tr></tbody></table><h3 id="csv" tabindex="-1"><a class="header-anchor" href="#csv" aria-hidden="true">#</a> <span id="jump_csv">CSV</span></h3><p>Support parsing of text files in csv format. Each line is required to be a standard csv string.</p><p>The following parameters are supported to adjust the csv parsing style:</p><table><thead><tr><th>Parameter name</th><th>Default value</th><th>Description</th></tr></thead><tbody><tr><td><code>job.reader.csv_delimiter</code></td><td><code>&#39;,&#39;</code></td><td>csv delimiter</td></tr><tr><td><code>job.reader.csv_escape</code></td><td></td><td>escape character</td></tr><tr><td><code>job.reader.csv_quote</code></td><td></td><td>quote character</td></tr><tr><td><code>job.reader.csv_with_null_string</code></td><td></td><td>Specify the conversion value of null field. It is not converted by default</td></tr></tbody></table>',15);function y(g,m){const l=o("RouterLink");return n(),s("div",null,[f,e("p",null,[t("Parent document: "),a(l,{to:"/en/documents/connectors.html"},{default:d(()=>[t("connectors")]),_:1})]),p,e("p",null,[t("The following mentioned parameters should be added to "),h,t(" block when using, for example: "),a(l,{to:"/en/documents/docs/connectors/ftp/ftp-v1-example.html"},{default:d(()=>[t("ftp-connector-example")]),_:1})]),u])}const v=r(c,[["render",y],["__file","ftp-v1.html.vue"]]);export{v as default};