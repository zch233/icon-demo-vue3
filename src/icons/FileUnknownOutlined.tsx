// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import FileUnknownOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileUnknownOutlined';

export interface FileUnknownOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const FileUnknownOutlined: FileUnknownOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={FileUnknownOutlinedSvg} />;

FileUnknownOutlined.displayName = 'FileUnknownOutlined';

export default FunctionalComponent;