// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import FileExclamationFilledSvg from '@ant-design/icons-svg/lib/asn/FileExclamationFilled';

export interface FileExclamationFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const FileExclamationFilled: FileExclamationFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={FileExclamationFilledSvg} />;

FileExclamationFilled.displayName = 'FileExclamationFilled';

export default FileExclamationFilled;