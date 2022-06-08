// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import FileMarkdownTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileMarkdownTwoTone';

export interface FileMarkdownTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const FileMarkdownTwoTone: FileMarkdownTwoToneIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={FileMarkdownTwoToneSvg} />;

FileMarkdownTwoTone.displayName = 'FileMarkdownTwoTone';

export default FileMarkdownTwoTone;