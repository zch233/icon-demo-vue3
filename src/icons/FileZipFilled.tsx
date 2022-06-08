// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import FileZipFilledSvg from '@ant-design/icons-svg/lib/asn/FileZipFilled';

export interface FileZipFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const FileZipFilled: FileZipFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={FileZipFilledSvg} />;

FileZipFilled.displayName = 'FileZipFilled';

export default FileZipFilled;