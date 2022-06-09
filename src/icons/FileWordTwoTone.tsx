// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import FileWordTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileWordTwoTone';

export interface FileWordTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const FileWordTwoTone: FileWordTwoToneIconType = (props, context) => <Icon name='FileWordTwoTone' {...{ ...props, ...context.attrs }} icon={FileWordTwoToneSvg} />;

FileWordTwoTone.displayName = 'FileWordTwoTone';

export default FileWordTwoTone;