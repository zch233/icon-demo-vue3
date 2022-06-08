// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import FileTextOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileTextOutlined';

export interface FileTextOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const FileTextOutlined: FileTextOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={FileTextOutlinedSvg} />;

FileTextOutlined.displayName = 'FileTextOutlined';

export default FunctionalComponent;