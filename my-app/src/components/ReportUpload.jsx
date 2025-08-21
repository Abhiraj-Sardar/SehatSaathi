import { useState, useRef } from 'react';
import { Upload, FileText, Image, X, CheckCircle, AlertTriangle, Eye, Download, Trash2, Calendar, User } from 'lucide-react';

const PatientReportsPortal = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const [uploadProgress, setUploadProgress] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const allowedTypes = {
    'application/pdf': 'PDF',
    'image/jpeg': 'JPEG',
    'image/jpg': 'JPG',
    'image/png': 'PNG',
    'image/gif': 'GIF',
    'image/webp': 'WebP'
  };

  const maxFileSize = 10 * 1024 * 1024; // 10MB

  const validateFile = (file) => {
    if (!allowedTypes[file.type]) {
      return 'Please upload only PDF files or images (JPEG, PNG, GIF, WebP)';
    }
    if (file.size > maxFileSize) {
      return 'File size must be less than 10MB';
    }
    return null;
  };

  const simulateUpload = (fileId) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 30;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setUploadProgress(prev => {
          const newProgress = { ...prev };
          delete newProgress[fileId];
          return newProgress;
        });
        setUploadedFiles(prev => prev.map(file => 
          file.id === fileId ? { ...file, status: 'completed' } : file
        ));
      } else {
        setUploadProgress(prev => ({ ...prev, [fileId]: progress }));
      }
    }, 200);
  };

  const handleFiles = (files) => {
    Array.from(files).forEach(file => {
      const error = validateFile(file);
      const fileId = Date.now() + Math.random();
      
      const newFile = {
        id: fileId,
        name: file.name,
        size: file.size,
        type: file.type,
        uploadDate: new Date().toLocaleDateString(),
        status: error ? 'error' : 'uploading',
        error: error,
        preview: null
      };

      // Create preview for images
      if (file.type.startsWith('image/') && !error) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setUploadedFiles(prev => prev.map(f => 
            f.id === fileId ? { ...f, preview: e.target.result } : f
          ));
        };
        reader.readAsDataURL(file);
      }

      setUploadedFiles(prev => [...prev, newFile]);

      if (!error) {
        simulateUpload(fileId);
      }
    });
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    handleFiles(e.dataTransfer.files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragActive(false);
  };

  const handleFileInput = (e) => {
    handleFiles(e.target.files);
    e.target.value = '';
  };

  const removeFile = (fileId) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== fileId));
    setUploadProgress(prev => {
      const newProgress = { ...prev };
      delete newProgress[fileId];
      return newProgress;
    });
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileIcon = (type) => {
    if (type === 'application/pdf') {
      return <FileText className="w-8 h-8 text-red-500" />;
    }
    return <Image className="w-8 h-8 text-blue-500" />;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 bg-green-100';
      case 'uploading':
        return 'text-blue-600 bg-blue-100';
      case 'error':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Patient Reports Portal
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Upload medical reports, lab results, and diagnostic images securely
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Upload Area */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-4">
              <h2 className="text-xl font-semibold text-white flex items-center">
                <Upload className="w-5 h-5 mr-2" />
                Upload Medical Reports
              </h2>
            </div>

            <div className="p-6">
              {/* Drag and Drop Area */}
              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 cursor-pointer ${
                  dragActive 
                    ? 'border-blue-400 bg-blue-50 scale-105' 
                    : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
                }`}
                onClick={() => fileInputRef.current?.click()}
              >
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                      dragActive ? 'bg-blue-200' : 'bg-gray-100'
                    }`}>
                      <Upload className={`w-8 h-8 transition-all duration-300 ${
                        dragActive ? 'text-blue-600' : 'text-gray-500'
                      }`} />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">
                      Drop files here or click to browse
                    </h3>
                    <p className="text-gray-500 mb-4">
                      Upload PDF reports or medical images
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-400">
                      <span className="bg-gray-100 px-3 py-1 rounded-full">PDF</span>
                      <span className="bg-gray-100 px-3 py-1 rounded-full">JPEG</span>
                      <span className="bg-gray-100 px-3 py-1 rounded-full">PNG</span>
                      <span className="bg-gray-100 px-3 py-1 rounded-full">GIF</span>
                      <span className="bg-gray-100 px-3 py-1 rounded-full">WebP</span>
                    </div>
                  </div>
                  
                  <p className="text-xs text-gray-400">
                    Maximum file size: 10MB
                  </p>
                </div>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept=".pdf,.jpg,.jpeg,.png,.gif,.webp"
                onChange={handleFileInput}
                className="hidden"
              />
            </div>
          </div>

          {/* Uploaded Files List */}
          {uploadedFiles.length > 0 && (
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-700 px-6 py-4">
                <h2 className="text-xl font-semibold text-white flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Uploaded Reports ({uploadedFiles.length})
                </h2>
              </div>

              <div className="p-6">
                <div className="space-y-4">
                  {uploadedFiles.map((file) => (
                    <div key={file.id} className="bg-gray-50 rounded-xl p-4 border border-gray-200 hover:shadow-lg transition-all duration-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 flex-1">
                          {/* File Icon */}
                          <div className="flex-shrink-0">
                            {file.preview ? (
                              <img 
                                src={file.preview} 
                                alt={file.name}
                                className="w-12 h-12 object-cover rounded-lg border-2 border-gray-200"
                              />
                            ) : (
                              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                                {getFileIcon(file.type)}
                              </div>
                            )}
                          </div>

                          {/* File Info */}
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-gray-800 truncate">{file.name}</h3>
                            <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                              <span>{formatFileSize(file.size)}</span>
                              <span className="flex items-center">
                                <Calendar className="w-3 h-3 mr-1" />
                                {file.uploadDate}
                              </span>
                              <span className="flex items-center">
                                <User className="w-3 h-3 mr-1" />
                                {allowedTypes[file.type]}
                              </span>
                            </div>
                          </div>

                          {/* Status Badge */}
                          <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(file.status)}`}>
                            {file.status === 'completed' && <CheckCircle className="w-3 h-3 inline mr-1" />}
                            {file.status === 'error' && <AlertTriangle className="w-3 h-3 inline mr-1" />}
                            {file.status === 'uploading' && <div className="w-3 h-3 border-2 border-blue-600 border-t-transparent rounded-full animate-spin inline-block mr-1"></div>}
                            {file.status.charAt(0).toUpperCase() + file.status.slice(1)}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center space-x-2 ml-4">
                          {file.status === 'completed' && (
                            <>
                              <button
                                onClick={() => setSelectedFile(file)}
                                className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-all duration-200"
                                title="Preview"
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                              <button
                                className="p-2 text-green-600 hover:bg-green-100 rounded-lg transition-all duration-200"
                                title="Download"
                              >
                                <Download className="w-4 h-4" />
                              </button>
                            </>
                          )}
                          <button
                            onClick={() => removeFile(file.id)}
                            className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-all duration-200"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      {file.status === 'uploading' && uploadProgress[file.id] && (
                        <div className="mt-3">
                          <div className="flex justify-between text-xs text-gray-500 mb-1">
                            <span>Uploading...</span>
                            <span>{Math.round(uploadProgress[file.id])}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${uploadProgress[file.id]}%` }}
                            ></div>
                          </div>
                        </div>
                      )}

                      {/* Error Message */}
                      {file.error && (
                        <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                          <p className="text-red-600 text-sm flex items-center">
                            <AlertTriangle className="w-4 h-4 mr-2" />
                            {file.error}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Upload Statistics */}
          {uploadedFiles.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {uploadedFiles.filter(f => f.status === 'completed').length}
                </h3>
                <p className="text-gray-600">Files Uploaded</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {uploadedFiles.filter(f => f.type === 'application/pdf').length}
                </h3>
                <p className="text-gray-600">PDF Reports</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Image className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {uploadedFiles.filter(f => f.type.startsWith('image/')).length}
                </h3>
                <p className="text-gray-600">Images</p>
              </div>
            </div>
          )}

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center justify-center p-4 border-2 border-dashed border-blue-300 rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 group"
              >
                <Upload className="w-5 h-5 text-blue-600 mr-2 group-hover:scale-110 transition-transform" />
                <span className="text-blue-600 font-medium">Add More Files</span>
              </button>
              
              <button 
                onClick={() => setUploadedFiles([])}
                className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-xl hover:border-red-400 hover:bg-red-50 transition-all duration-200 group"
              >
                <Trash2 className="w-5 h-5 text-gray-600 group-hover:text-red-600 mr-2 group-hover:scale-110 transition-all" />
                <span className="text-gray-600 group-hover:text-red-600 font-medium">Clear All</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* File Preview Modal */}
      {selectedFile && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">{selectedFile.name}</h3>
              <button
                onClick={() => setSelectedFile(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-200"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            
            <div className="p-6 max-h-[70vh] overflow-auto">
              {selectedFile.preview ? (
                <img 
                  src={selectedFile.preview} 
                  alt={selectedFile.name}
                  className="max-w-full h-auto rounded-lg shadow-lg"
                />
              ) : (
                <div className="text-center py-12">
                  <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">PDF preview not available</p>
                  <p className="text-sm text-gray-500 mt-2">Click download to view the file</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientReportsPortal;