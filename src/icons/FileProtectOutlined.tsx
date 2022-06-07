// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import FileProtectOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileProtectOutlined';

export interface FileProtectOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FileProtectOutlined: FileProtectOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={FileProtectOutlinedSvg} />
    ;

FileProtectOutlined.displayName = 'FileProtectOutlined';

export default FileProtectOutlined;