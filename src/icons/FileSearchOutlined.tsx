// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import FileSearchOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileSearchOutlined';

export interface FileSearchOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const FileSearchOutlined: FileSearchOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={FileSearchOutlinedSvg} />;

FileSearchOutlined.displayName = 'FileSearchOutlined';

export default FunctionalComponent;