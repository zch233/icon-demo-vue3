// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import FileZipTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileZipTwoTone';

export interface FileZipTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FileZipTwoTone: FileZipTwoToneIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={FileZipTwoToneSvg} />
    ;

FileZipTwoTone.displayName = 'FileZipTwoTone';

export default FileZipTwoTone;