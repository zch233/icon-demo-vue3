// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import FileImageTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileImageTwoTone';

export interface FileImageTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const FileImageTwoTone: FileImageTwoToneIconType = (props, context) => <Icon name='FileImageTwoTone' {...{ ...props, ...context.attrs }} icon={FileImageTwoToneSvg} />;

FileImageTwoTone.displayName = 'FileImageTwoTone';

export default FileImageTwoTone;