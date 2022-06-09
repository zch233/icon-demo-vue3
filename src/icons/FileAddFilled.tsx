// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import FileAddFilledSvg from '@ant-design/icons-svg/lib/asn/FileAddFilled';

export interface FileAddFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const FileAddFilled: FileAddFilledIconType = (props, context) => <Icon name='FileAddFilled' {...{ ...props, ...context.attrs }} icon={FileAddFilledSvg} />;

FileAddFilled.displayName = 'FileAddFilled';

export default FileAddFilled;