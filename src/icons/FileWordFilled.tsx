// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import FileWordFilledSvg from '@ant-design/icons-svg/lib/asn/FileWordFilled';

export interface FileWordFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const FileWordFilled: FileWordFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={FileWordFilledSvg} />;

FileWordFilled.displayName = 'FileWordFilled';

export default FunctionalComponent;