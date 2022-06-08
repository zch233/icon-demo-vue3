// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import FileTextFilledSvg from '@ant-design/icons-svg/lib/asn/FileTextFilled';

export interface FileTextFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const FileTextFilled: FileTextFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={FileTextFilledSvg} />;

FileTextFilled.displayName = 'FileTextFilled';

export default FunctionalComponent;