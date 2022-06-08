// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import FileOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileOutlined';

export interface FileOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const FileOutlined: FileOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={FileOutlinedSvg} />;

FileOutlined.displayName = 'FileOutlined';

export default FunctionalComponent;